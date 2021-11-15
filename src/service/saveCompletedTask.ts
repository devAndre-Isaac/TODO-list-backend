import { getMongoRepository, ObjectID } from "typeorm";
import { CompletedTasks } from "../entity/completedTaks";

export const saveCompletedTask = async (markedTask: {
  done: any;
  id?: ObjectID | undefined;
  task?: string | undefined;
  description?: string | undefined;
  created_at?: Date | undefined;
  update_at?: Date | undefined;
}) => {
  const repositoryForVerify = getMongoRepository(CompletedTasks);
  const create = repositoryForVerify.create(markedTask);
  await repositoryForVerify.save(create);
};
