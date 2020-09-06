import { Request, Response, NextFunction, json } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import publicationRepository from "../intraestructure/repositories/publicationRepository"

class PublicationController {
  public async createPublication(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = req.body
      const publication = await publicationRepository.createPublication(data as IPublication);
      res.json(publication);
    } catch(err) {
      console.log(err)
      next(new HandledError("No se ha podido crear la publicación."));
    }
  }
  public async getPublications(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const publications = await publicationRepository.getPublications();
      res.json(publications);
    } catch {
      next(new HandledError("No se ha podido obtener la lista de publicaciones."));
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
      next(new HandledError("No se ha podido obtener la publicacion que buscas."));
    }
  }
  public async getPublicationsByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user_id: any = req.body.user_id;
      const publications = await publicationRepository.getPublicationByUser(user_id);
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
      const property_type_id: object = req.body.property_type_id;
      const publications = await publicationRepository.getPublicationByFilters(type_of_housing, property_type_id);
      res.json(publications);
    } catch {
      next(new HandledError("Error al consultar publicaciones del usuario."));
    }
  }
  public async getPublicationsByType(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const type:number = req.body.type;
      const search:string = req.body.search;
      const publications = await publicationRepository.getPublicationsByType(type, search);
      res.json(publications);
    } catch {
      next(new HandledError("No se ha podido obtener las publicaciones por el tipo de busqueda."));
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
