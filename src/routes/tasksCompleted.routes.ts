import { Router } from "express";

import completedController from "../controller/completed";

const routes = Router();

routes.post("/completed/:id", completedController.mark);
routes.get("/completed/readAll", completedController.readAllCompletedTasks);

export default routes;
