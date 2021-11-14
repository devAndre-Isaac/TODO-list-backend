import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";
import { Tasks } from "../entity/tasks";

class completedController {
  async mark(req: Request, res: Response) {
    const repositoryForVerify = getMongoRepository(Tasks);

    const { id } = req.params;
    const { done } = req.body

    const verifTask = await repositoryForVerify.findOne(id);
    
    const markedTask = {...verifTask, done: done};

    const taskToSave = repositoryForVerify.create(markedTask as any);
    const task = await repositoryForVerify.save(taskToSave);

    return res.status(201).json(task);
  }
}

export default new completedController();
