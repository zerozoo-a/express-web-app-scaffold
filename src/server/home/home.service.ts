import type { RequestHandler } from "express";
import Pool from "mysql2/typings/mysql/lib/Pool";

export const homeService: RequestHandler = (req, res) => {
  const conn = req.app.get("db") as Pool;
  let result;
  conn.getConnection((err, conn) => {
    if (err) throw err;
    const SelectAllFrom = `SELECT * FROM departments`;

    conn.query(SelectAllFrom, (err, res) => {
      if (err) throw err;
      console.log(">>>>", res);
      result = res;
    });
  });

  res.render(`${process.env.PWD}/views/router/home/home`, {
    title: "hi!!!!",
    range: [1, 2, 3],
  });
};
