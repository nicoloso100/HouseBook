import { Router } from "express";
import generalController from "../controllers/generalController";

class GeneralRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.get("/getCities", generalController.getCities);
  }
}

export default GeneralRoutes;
