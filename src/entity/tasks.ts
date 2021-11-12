import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from "typeorm";

@Entity("tasks")
export class Tasks {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  task: string

  @Column()
  description: string;
  
  @Column()
  done: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
