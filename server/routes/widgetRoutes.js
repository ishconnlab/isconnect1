import { Router } from "express";
import { createWidget, deleteWidget, listWidgets, updateWidget } from "../controllers/widgetController.js";
const router = Router();
router.get("/", listWidgets);
router.post("/", createWidget);
router.patch("/:id", updateWidget);
router.delete("/:id", deleteWidget);
export default router;
