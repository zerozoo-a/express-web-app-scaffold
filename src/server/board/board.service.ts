import type { RequestHandler } from "express";
import type { App } from "../loaders/express";
import { ParamsDictionary } from "express-serve-static-core";
import Pool from "mysql2/typings/mysql/lib/Pool";
import { PoolConnection } from "mysql2";

type Req = Parameters<RequestHandler>["0"];
type Res = Parameters<RequestHandler>["1"];
type Next = Parameters<RequestHandler>["2"];

export class Service {
  readonly DOMAIN: string;
  readonly path: string;
  readonly app: App;

  constructor({ DOMAIN, app }: { DOMAIN: string; app: App }) {
    this.DOMAIN = DOMAIN;
    this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
    this.app = app;
  }
}

export class BoardService extends Service {
  constructor({ DOMAIN, app }: { DOMAIN: string; app: App }) {
    super({ DOMAIN, app });
  }

  render = async (req: Req, res: Res, next: Next) => {
    const con1 = this.app.get("db").conns[0];
    const [departments, metaData] = await con1.query(
      "SELECT * FROM departments"
    );

    return res.render(this.path, {
      title: "BOARD TITLE",
      date: new Date().toLocaleTimeString(),
      data: {
        departments,
      },
    });
  };

  secret = (req: Req, res: Res, next: Next) => {
    console.log("req", req.query);
    res.send("hi");
  };
}
