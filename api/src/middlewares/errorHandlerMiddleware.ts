import { Request, Response, NextFunction } from "express";
import { HandledError } from "../utils/errorHandler/customError";

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HandledError) {
    res.status(400).send(err.message);
  } else {
    res
      .status(500)
      .send(
        "Ha ocurrido un error en el servidor, por favor intentelo nuevamente."
      );
  }
};
