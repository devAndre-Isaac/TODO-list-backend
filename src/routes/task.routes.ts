import { Router } from "express";

import tasksController from "../controller/tasks";

const routes = Router();

routes.post("/save", tasksController.create)
routes.get("/read", tasksController.read)
routes.get("/read/:id", tasksController.readById)
routes.put("/update/:id", tasksController.update)
routes.delete("/delete/:id", tasksController.delete)

export default routes