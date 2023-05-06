import express from "express";
import { newTask,getMyTasks, updateTask, deleteTask } from "../controller/taskFunc.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/newTask",isAuthenticated,newTask);
router.get("/myTasks",isAuthenticated,getMyTasks);
router.route("/:id").put(isAuthenticated ,updateTask).delete(isAuthenticated ,deleteTask);

export default router;