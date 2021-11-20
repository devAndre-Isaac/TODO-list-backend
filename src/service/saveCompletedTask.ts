import { getMongoRepository } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";

export const saveCompletedTask = async (
  task: string,
  description?: string,
  done?: any,
) => {
  const repositoryForVerify = getMongoRepository(CompletedTasks);
  const create = repositoryForVerify.create({task, description, done});
  return await repositoryForVerify.save(create);
};
