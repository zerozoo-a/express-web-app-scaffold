import { DataSource } from "typeorm";
import { Service } from "../../lib/classes/Service";
import { DB } from "../loaders/express.loader";

import { User } from "../../db/entity/user.entity";
import { RequestHandler } from "express";

export class UserService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = async (req, res) => {
    res.render(this.path, {
      title: "USER TITLE",
    });
  };

  getOne: RequestHandler = async (req, res) => {
    const r = await this.repo
      .getRepository(User)
      .find({ relations: { profile: true } });

    res.send("sorry");
  };
}
