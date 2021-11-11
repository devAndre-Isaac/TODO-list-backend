import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import { Tasks } from '../entity/tasks';


class tasksController {
    async store(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const taskToSave = repository.create(req.body)
      const task = await repository.save(taskToSave);
      return res.status(201).json(task);
    }
    async read(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const read = await repository.find()
      return res.status(200).json(read)
    }
    async readById(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const { id } = req.params
      const readById = await repository.findOne(id)
      return res.status(200).json(readById)
    }
}
export default new tasksController();
