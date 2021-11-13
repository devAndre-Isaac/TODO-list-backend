import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";
import { Tasks } from "../entity/tasks";

class completedController {
    async mark(req: Request, res: Response) {
        const repository = getMongoRepository(CompletedTasks);
        const repositoryForVerify = getMongoRepository(Tasks);
       
        const { id } = req.params

        const verifTask = await repositoryForVerify.findOne(id)

        const taskToSave = repository.create(req.body)
        
        const task = await repository.save(taskToSave);
        
        return res.status(201).json(task);
      }
}

export default new completedController();
