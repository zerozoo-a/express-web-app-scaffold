import type { RequestHandler } from "express";
import Pool from "mysql2/typings/mysql/lib/Pool";

export const aboutService: RequestHandler = (req, res) => {
  const DOMAIN = `/about/about`;
  const conn = req.app.get("db") as Pool;

  res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`);
};
