import { Router } from "express";
import { singup, singin, profile } from "../controllers/authController";
import { tokenValidation } from "../utils/auth/validateToken";

const router: Router = Router();

router.post("/singup", singup);
router.post("/singin", singin);
router.get("/profile", tokenValidation, profile);

export default router;
