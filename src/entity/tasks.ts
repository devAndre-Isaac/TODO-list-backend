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

  @Column({nullable: false})
  task: string

  @Column({nullable: false})
  description: string;
  
  @Column({nullable: true})
  done: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
