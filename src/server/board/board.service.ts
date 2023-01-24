import { Service } from "../../lib/classes/Service";

import type { Request, Response } from "express";

export class BoardService extends Service<any> {
  constructor({ DOMAIN, repo }: { DOMAIN: string; repo: any }) {
    super({ DOMAIN, repo });
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
