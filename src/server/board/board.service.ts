import { Service } from "../../lib/classes/Service";

import type { Request, Response } from "express";

export class BoardService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render = async (req: Request, res: Response) => {
    const con1 = this.app.get("db").conns[0];
    // const [departments, metaData] = await con1.query(
    //   "SELECT * FROM departments"
    // );

    return res.render(this.path, {
      title: "BOARD TITLE",
      date: new Date().toLocaleTimeString(),
      data: {
        // departments,
      },
    });
  };
}
