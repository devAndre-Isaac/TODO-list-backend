import { Router } from "express";

import tasksController from "../controller/tasks";

const taskRouter = Router();

taskRouter.post(
  "/tasks/save",
  tasksController.store)


  export { taskRouter };
