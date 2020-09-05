import { Router } from "express";
import { tokenValidation } from "../utils/auth/validateToken";
import authController from "../controllers/authController";

class AuthRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.post("/singup", authController.singup);
    this.router.post("/singin", authController.singin);
    this.router.get("/profile", tokenValidation, authController.profile);
  }
}

export default AuthRoutes;
