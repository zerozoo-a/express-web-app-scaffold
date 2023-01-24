import { Service } from "../../lib/classes/Service";

import type { RequestHandler } from "express";

export class ProfileService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  getOne: RequestHandler = async (req, res) => {
    const orm = this.app.get<typeof this.DataSource>("orm");
  };

  render: RequestHandler = async (req, res) => {
    const con1 = this.app.get<typeof this.DB>("db").conns[0];
    this.app.get("db");

    const [departments, metaData] = await con1.query("SELECT 1 + 1");

    return res.render(this.path, {
      title: "BOARD TITLE",
      date: new Date().toLocaleTimeString(),
      data: {
        departments,
      },
    });
  };
}
