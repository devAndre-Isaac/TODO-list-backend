import "reflect-metadata";
import express from "express";
import cors from "cors";

import "./database";
import taskRouter from "./routes/task.routes";
import completedTaskRouter from "./routes/tasksCompleted.routes";


const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks',taskRouter);
app.use('/tasks', completedTaskRouter);

app.get("/", (request, response) => {
  return response.json({ message: "TODO-List - Versão 0.1" });
});

app.listen(3333, () => {
  console.log(" ⚡ Server started at http://localhost:3333");
});
