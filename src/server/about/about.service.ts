import type { RequestHandler } from "express";
import Pool from "mysql2/typings/mysql/lib/Pool";
import type { App } from "../loaders/express";

export const aboutService: RequestHandler = async (req, res) => {
  const DOMAIN = `/about/about`;
  const app: App = req.app;

  const db = app.get("db");
  const ADD = "SELECT ? AS solution";

  const [result, metaData] = await db.conns[0].query(ADD, [1 + 1]);

  res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
    title: "ABOUT TITLE",
  });
};
