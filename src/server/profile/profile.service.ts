import { DataSource } from "typeorm";
import { Service } from "../../lib/classes/Service";
import { DB } from "../loaders/express";

import type { RequestHandler } from "express";
import type { Profile } from "../../db/entity/profile.entity";

export class ProfileService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  getOne: RequestHandler = async (req, res) => {
    const orm = this.app.get<DataSource>("orm");
  };

  render: RequestHandler = async (req, res) => {
    const con1 = this.app.get<DB>("db").conns[0];
    this.app.get("db");

    const [departments, metaData] = await con1.query("SELECT 1 + 1");
    console.log("departments", departments);

    return res.render(this.path, {
      title: "BOARD TITLE",
      date: new Date().toLocaleTimeString(),
      data: {
        departments,
      },
    });
  };
}
