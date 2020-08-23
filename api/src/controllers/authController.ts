import { Request, Response, NextFunction } from "express";
import User, { IUserModel } from "../intraestructure/models/User";
import jwt from "jsonwebtoken";
import authRepository from "../intraestructure/repositories/authRepository";
import { HandledError } from "../utils/errorHandler/customError";
import { AuthError } from "../utils/errorHandler/customAuthError";

class AuthController {
  async singup(req: Request, res: Response) {
    try {
      const user: IUserModel = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      user.password = await user.encryptPassword(user.password);
      const savedUSer = await user.save();
      const token: string = jwt.sign(
        { _id: savedUSer._id },
        process.env.TOKEM_SECRET || "tokenTest"
      );
      res.header("auth-token", token).json(savedUSer);
    } catch (error) {
      console.log(error);
    }
  }

  async singin(req: Request, res: Response, next: NextFunction) {
    if (!req.body.email) {
      next(new AuthError("No se envió el parámetro email."));
    }

    const user = await authRepository.userSingIn(req.body.email);
    if (user === null) {
      next(new AuthError("Usuario o contraseña incorrecto."));
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
