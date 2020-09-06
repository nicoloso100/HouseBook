import { Request, Response, NextFunction } from "express";
import User, { IUserModel } from "../intraestructure/models/User";
import jwt from "jsonwebtoken";
import authRepository from "../intraestructure/repositories/authRepository";
import { AuthError } from "../utils/errorHandler/customAuthError";
import { HandledError } from "../utils/errorHandler/customError";

class AuthController {
  async singup(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserModel = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      user.password = await user.encryptPassword(user.password);
      const userExists = await User.findOne({ email: user.email });
      if (userExists) {
        throw new HandledError("El usuario ingresado ya existe.");
      } else {
        const savedUSer = await user.save();
        const token: string = jwt.sign(
          { _id: savedUSer._id },
          process.env.TOKEM_SECRET || "tokenTest"
        );
        res.header("auth-token", token).json(savedUSer);
      }
    } catch (error) {
      next(error);
    }
  }

  async singin(req: Request, res: Response, next: NextFunction) {
    if (!req.body.email) {
      next(new AuthError("Debe ingresar un email."));
    }

    const user = await authRepository.userSingIn(req.body.email);
    if (user === null) {
      next(
        new AuthError("El usuario no está registrado o contraseña incorrecta.")
      );
    } else {
      const correctPassword: boolean = await user.validatePassword(
        req.body.password
      );
      if (!correctPassword) return res.status(400).json("invalid password");
      const token: string = jwt.sign(
        { _id: user._id },
        process.env.TOKEM_SECRET || "tokenTest"
      );
      res.header("auth-token", token).json(user);
    }
  }

  async profile(req: Request, res: Response) {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json("no existe el usuario");
    res.send(user);
  }
}

const authController = new AuthController();
export default authController;
