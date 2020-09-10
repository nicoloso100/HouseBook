import { Router } from "express";
import generalController from "../controllers/generalController";
import publicationController from "../controllers/publicationController";

class PublicationRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.get(
      "/getPublication/:id",
      publicationController.getPublicationById
    );
    this.router.post(
      "/createPublication",
      publicationController.createPublication
    );
    this.router.get(
      "/getPublicationsByUser/:id",
      publicationController.getPublicationsByUser
    );
    this.router.post(
      "/getPublicationsByFilters",
      publicationController.getPublicationsByFilters
    );
    this.router.delete(
      "/deletePublication/:id",
      publicationController.deletePublicationById
    );
  }
}

export default PublicationRoutes;
