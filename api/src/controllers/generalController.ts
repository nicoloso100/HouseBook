import { Request, Response, NextFunction } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import generalRepository from "../intraestructure/repositories/generalRepository";
import { gridFsBucket } from "../intraestructure/database/config";

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

  public async uploadImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      let files = req.files as Express.Multer.File[];
      let result: string[] = files.map(
        (file: Express.Multer.File) => file.filename
      );
      res.json(result);
    } catch {
      next(new HandledError("No se han podido cargar las imágenes."));
    }
  }

  public async downloadImage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const filename = req.params.filename;
      gridFsBucket
        .find({
          filename: filename,
        })
        .toArray((err: any, files: any) => {
          if (!files || files.length === 0) {
            return res.status(404).json({
              err: "no files exist",
            });
          }
          gridFsBucket.openDownloadStreamByName(filename).pipe(res);
        });
    } catch {
      next(new HandledError("Ha ocurrido un error al obtener la imágen."));
    }
  }
}

const generalController = new GeneralController();
export default generalController;
