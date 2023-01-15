import type { RequestHandler } from "express";
import { conn } from "../../db/connection";

/**
 *  /
 */
export const homeService: RequestHandler = (req, res) => {
  conn.getConnection((err, conn) => {
    if (err) throw err;
    const SelectAllFrom = `SELECT * FROM departments`;

    conn.query(SelectAllFrom, (err, res) => {
      if (err) throw err;
    });
  });
  console.log(`pwd`, process.env.PWD);

  res.render(`${process.env.PWD}/views/router/home/home`, {
    title: "hi!!!!",
    range: [1, 2, 3],
  });

  // res.render(, {
  // });
};
