import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
