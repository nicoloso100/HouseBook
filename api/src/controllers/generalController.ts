import { Request, Response, NextFunction } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import generalRepository from "../intraestructure/repositories/generalRepository";

class GeneralController {
  public async getCities(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      let filter = req.query["filter"];
      if (!filter) {
        filter = "";
      }
      const cities = await generalRepository.getCities(filter as string);
      res.json(cities);
    } catch {
      next(new HandledError("No se ha podido obtener la lista de ciudades."));
    }
  }
}

const generalController = new GeneralController();
export default generalController;
