import { Router } from "express";

import completedController from "../controller/completed";

const routes = Router();

routes.post("/completed/:idOfCompleted", completedController.mark);
routes.get("/completed/readAll", completedController.readAllCompletedTasks);
routes.get("/completed/read/:idOfCompleted", completedController.readCompletedTaskById);


export default routes;
