import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from "typeorm";

@Entity("completed_tasks")
export class CompletedTasks {
  @ObjectIdColumn()
  idOfCompleted: ObjectID;

  @Column({ nullable: true })
  task: string;

  @Column({ nullable: false })
  done: boolean;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
