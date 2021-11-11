import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { Tasks } from '../entity/tasks'


class tasksController {
    async store(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const taskToSave = repository.create(req.body)
      const task = await repository.save(taskToSave);
      return res.status(201).json(task);
    }
}
export default new tasksController();
