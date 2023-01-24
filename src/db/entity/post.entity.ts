import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 140, nullable: false })
  content: string;

  @Column({
    nullable: true,
    length: 400,
  })
  img: string;
}
