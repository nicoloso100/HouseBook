import { Request, Response, NextFunction, json } from "express";
import { HandledError } from "../utils/errorHandler/customError";
import publicationRepository from "../intraestructure/repositories/publicationRepository";
import { deleteImages } from "../utils/files/deleteImages";

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

  public async getPublicationById(
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
      const city: object = req.body.city;
      const publications = await publicationRepository.getPublicationByFilters(
        type_of_housing,
        type_of_sale,
        city,
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
      const post = await publicationRepository.getPublicationById(id);
      if (post !== null) {
        const images = post.images;
        const delImages = await deleteImages(images);
        if (delImages) {
          await publicationRepository.deletePublicationById(id);
          res.json("Publicación eliminada exitosamente");
        } else {
          throw Error;
        }
      } else {
        throw Error;
      }
    } catch {
      next(new HandledError("No se ha podido eliminar la publicación."));
    }
  }
  public async updatePublicationById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id: any = req.params.id;
      const data: IPublication = req.body;
      const publications = await publicationRepository.updatePublication(
        data,
        id
      );
      res.json(publications);
    } catch {
      next(
        new HandledError(
          "Error modificar la publicación, por favor intentelo nuevamente."
        )
      );
    }
  }
}

const publicationController = new PublicationController();
export default publicationController;
