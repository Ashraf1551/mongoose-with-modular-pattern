import { Router } from "express";
import { TaskController } from "./task.controller.js";

const router = Router();

router.post("/", TaskController.createTask);
router.get("/", TaskController.getAllTask);
router.get("/:id", TaskController.getATask)
router.patch("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

export const TaskRouter = router;
