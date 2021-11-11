import { Router } from "express";

import tasksController from "../controller/tasks";

const routes = Router();

routes.post("/tasks/save", tasksController.create)
routes.get("/tasks/read", tasksController.read)
routes.get("/tasks/read/:id", tasksController.readById)
routes.put("/tasks/update/:id", tasksController.update)
routes.delete("/tasks/delete/:id", tasksController.delete)

  export default routes