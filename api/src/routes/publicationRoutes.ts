import { Router } from "express";
import generalController from "../controllers/generalController";
import publicationController from "../controllers/publicationController";

class PublicationRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.get("/getPublications", publicationController.getPublications);
    this.router.get("/getPublications/:id", publicationController.getPublicationsById);
    this.router.post("/createPublication", publicationController.createPublication);
    this.router.post("/getPublicationsByType", publicationController.getPublicationsByType);
    this.router.post("/getPublicationsByUser", publicationController.getPublicationsByUser);
    this.router.post("/getPublicationsByFilters", publicationController.getPublicationsByFilters);
    this.router.get("/deletePublication/:id", publicationController.deletePublicationById);
  }
}

export default PublicationRoutes;
