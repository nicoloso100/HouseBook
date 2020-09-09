import { Router } from "express";
import generalController from "../controllers/generalController";
import { uploadImage } from "../utils/files/uploadImage";

class GeneralRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.get("/getCities", generalController.getCities);
    this.router.post(
      "/uploadImages",
      uploadImage.array("file", 30),
      generalController.uploadImages
    );
    this.router.get("/image/:filename", generalController.downloadImage);
  }
}

export default GeneralRoutes;
