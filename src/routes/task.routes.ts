import { Router } from "express";

import tasksController from "../controller/tasks";

const routes = Router();

routes.post("/tasks/save", tasksController.store)
routes.get("/tasks/read", tasksController.read)
routes.get("/tasks/read/:id", tasksController.readById)
routes.put("/tasks/update/:id", tasksController.update)

  export default routes