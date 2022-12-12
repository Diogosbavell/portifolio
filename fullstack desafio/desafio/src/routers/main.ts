import { Router } from "express";
import * as mainController from "../controllers/mainController";

const router = Router();

router.get("/", mainController.home);
router.get("/readSummary",mainController.readAll);
router.get("/readDetailed/:id",mainController.readDet);

export default router;