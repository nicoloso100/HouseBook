import { Request, Response } from "express";
import User, { IUser } from "../intraestructure/models/User";
import jwt from "jsonwebtoken";

export const singup = async (req: Request, res: Response) => {
  try {
    //create user
    const user: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    user.password = await user.encryptPassword(user.password);
    const savedUSer = await user.save();
    //token
    const token: string = jwt.sign(
      { _id: savedUSer._id },
      process.env.TOKEM_SECRET || "tokenTest"
    );
    res.header("auth-token", token).json(savedUSer);
  } catch (error) {
    console.log(error);
  }
};

export const singin = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json("Email or password is worng");
  const correctPassword: boolean = await user.validatePassword(
    req.body.password
  );
  if (!correctPassword) return res.status(400).json("invalid password");
  const token: string = jwt.sign(
    { _id: user._id },
    process.env.TOKEM_SECRET || "tokenTest"
  );
  res.header("auth-token", token).json(user);
};

export const profile = (req: Request, res: Response) => {
  const user = User.findById(req.userId);
  if (!user) return res.status(404).json("no existe el usuario");
  res.send(user);
};
