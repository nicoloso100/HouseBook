import { Request, Response, NextFunction } from "express";
import { HandledError } from "../utils/errorHandler/customError";

export const getCities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new HandledError("error del api"));
};
