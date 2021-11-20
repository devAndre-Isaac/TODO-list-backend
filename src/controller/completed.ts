import { Request, Response } from "express";

import { getMongoRepository } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";
import { Tasks } from "../entity/tasks";
import { saveCompletedTask } from "../service/saveCompletedTask";

class completedController {
  async mark(req: Request, res: Response) {
    const repositoryForVerify = getMongoRepository(Tasks);

    const { idOfCompleted } = req.params;
    const { done } = req.body;

    const verifTask = await repositoryForVerify.findOne(idOfCompleted);

    const upCreate = repositoryForVerify.create({ ...verifTask, done: done });
    const upSave = await repositoryForVerify.save(upCreate);

    await saveCompletedTask(upCreate.task, upCreate.description, upCreate.done);

    return res.status(201).json(upSave);
  }
  async readAllCompletedTasks(req: Request, res: Response) {
    const repository = getMongoRepository(CompletedTasks);
    const read = await repository.find();
    return res.status(200).json(read);
  }
  async readCompletedTaskById(req: Request, res: Response) {
    const repository = getMongoRepository(CompletedTasks);
    const { idOfCompleted } = req.params;
    const readId = await repository.findOne(idOfCompleted);
    return res.status(200).json(readId);
  }
}

export default new completedController();
