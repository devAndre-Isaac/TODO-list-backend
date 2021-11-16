import { Request, Response } from "express";

import { getMongoRepository } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";
import { Tasks } from "../entity/tasks";
import { saveCompletedTask } from "../service/saveCompletedTask";

class completedController {
  async mark(req: Request, res: Response) {
    const repositoryForVerify = getMongoRepository(Tasks);

    const { id } = req.params;
    const { done } = req.body;

    const verifTask = await repositoryForVerify.findOne(id);

    const markedTask = { ...verifTask, done: done };

    await saveCompletedTask(markedTask);

    const taskToSave = repositoryForVerify.create(markedTask as any);
    const task = await repositoryForVerify.save(taskToSave);

    return res.status(201).json(task);
  }
  async readAllCompletedTasks(req: Request, res: Response) {
    const repository = getMongoRepository(CompletedTasks);
    const read = await repository.find()
    return res.status(200).json(read)
  }
}

export default new completedController();
