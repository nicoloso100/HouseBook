import { Router } from "express";
import { getCities } from "../controllers/generalController";

const router: Router = Router();

router.get("/getCities", getCities);

export default router;
