import { Router } from "express";

import completedController from "../controller/completed";

const routes = Router();

routes.post("/completed/:id", completedController.mark)

export default routes