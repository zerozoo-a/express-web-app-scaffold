import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { IsEmail } from "class-validator";
import { hash } from "bcrypt";
import { Profile } from "./profile.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: false })
  nick: string;

  @Column()
  @IsEmail()
  @Index({ unique: true })
  email: string;

  @Column({ nullable: false })
  provider: string | "local";

  @Column({ nullable: true })
  snsId: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    try {
      this.password = await hash(this.password, 10);
    } catch (error) {
      console.error("ERROR LOG:", error);
      throw new Error("SERVER ERROR EXCEPTION!");
    }
  }

  @CreateDateColumn()
  createdDateAt: Date;

  @DeleteDateColumn()
  deletedDateAt: Date;

  @UpdateDateColumn()
  updatedDateAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
