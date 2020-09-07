import { Request, Response, NextFunction, json } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import publicationRepository from "../intraestructure/repositories/publicationRepository";

class PublicationController {
  public async createPublication(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = req.body;
      const publication = await publicationRepository.createPublication(
        data as IPublication
      );
      res.json(publication);
    } catch (err) {
      console.log(err);
      next(new HandledError("No se ha podido crear la publicación."));
    }
  }

  public async getPublicationsById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id: any = req.params.id;
      const publications = await publicationRepository.getPublicationById(id);
      res.json(publications);
    } catch {
      next(
        new HandledError("No se ha podido obtener la publicacion que buscas.")
      );
    }
  }
  public async getPublicationsByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user_id: any = req.params.id;
      const publications = await publicationRepository.getPublicationByUser(
        user_id
      );
      res.json(publications);
    } catch {
      next(new HandledError("Error al consultar publicaciones del usuario."));
    }
  }
  public async getPublicationsByFilters(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const type_of_housing: object = req.body.type_of_housing;
      const type_of_sale: object = req.body.type_of_sale;
      const publications = await publicationRepository.getPublicationByFilters(
        type_of_housing,
        type_of_sale
      );
      res.json(publications);
    } catch {
      next(new HandledError("Error al consultar publicaciones del usuario."));
    }
  }

  public async deletePublicationById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id: any = req.params.id;
      await publicationRepository.deletePublicationById(id);
      res.json("Publicación eliminada exitosamente");
    } catch {
      next(new HandledError("No se ha podido eliminar la publicación."));
    }
  }
}

const publicationController = new PublicationController();
export default publicationController;
