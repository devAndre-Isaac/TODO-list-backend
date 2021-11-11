import { Router } from "express";

import tasksController from "../controller/tasks";

const routes = Router();

routes.post("/tasks/save", tasksController.store)


  export default routes