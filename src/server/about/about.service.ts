import type { RequestHandler } from "express";
import Pool from "mysql2/typings/mysql/lib/Pool";
import type { App } from "../loaders/express";

export const aboutService: RequestHandler = async (req, res) => {
  const DOMAIN = `/about/about`;
  const app: App = req.app;
  const pool = app.get("pools")[0];
  const ADD = "SELECT ? AS solution";
  const [result, metaData] = await pool.query(ADD, [1 + 1]);

  console.log("res", result);
  res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
    title: "ABOUT TITLE",
  });
};
