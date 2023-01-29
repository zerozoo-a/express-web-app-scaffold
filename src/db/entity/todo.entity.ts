import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, nullable: false })
  content: string;

  @CreateDateColumn()
  createdDateAt: Date;

  @DeleteDateColumn()
  deletedDateAt: Date;

  @UpdateDateColumn()
  updatedDateAt: Date;
}
