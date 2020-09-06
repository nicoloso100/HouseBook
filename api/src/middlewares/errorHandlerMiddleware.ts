import { Request, Response, NextFunction } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import { AuthError } from "../utils/errorHandler/customAuthError";

interface IError {
  error: string;
}

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HandledError) {
    const newError: IError = {
      error: err.message,
    };
    res.status(400).json(newError);
  }
  if (err instanceof AuthError) {
    const newError: IError = {
      error: err.message,
    };
    res.status(401).json(newError);
  } else {
    const newError: IError = {
      error:
        "Ha ocurrido un error en el servidor, por favor intentelo nuevamente.",
    };
    res.status(500).json(newError);
  }
};
