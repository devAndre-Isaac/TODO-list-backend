import { Router } from "express";

import tasksController from "../controller/tasks";

const routes = Router();

routes.post("/tasks/save", tasksController.store)
routes.get("/tasks/read", tasksController.read)
routes.get("/tasks/read/:id", tasksController.readById)


  export default routes