import { getMongoRepository, ObjectID } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";

export const saveCompletedTask = async (upCreate: {
  done: any;
  task?: string | undefined;
  description?: string | undefined;
}) => {
  const repositoryForVerify = getMongoRepository(CompletedTasks);
  const create = repositoryForVerify.create(upCreate);
  return await repositoryForVerify.save(create);
};
