import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import { Tasks } from '../entity/tasks';


class tasksController {
    async create(req: Request, res: Response) {
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
    async update(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const { id } = req.params
      const update = await repository.update(id, req.body)
      const updateSave = repository.create(update as any)
      return res.status(201).json(updateSave);
    } 
    async delete(req: Request, res: Response) {
      const repository = getMongoRepository(Tasks);
      const { id } = req.params
      const deleteTask = await repository.delete(id)
      const deleteSave = repository.create(deleteTask as any)
      return res.status(201).json(deleteSave);
    }
}
export default new tasksController();
