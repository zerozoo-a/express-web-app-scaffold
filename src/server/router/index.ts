import { Router } from "express";
import { range } from "../../lib/range";
import { conn } from "../../db/connection";

export const indexRouter = Router();

indexRouter.get("/nav", (req, res) => {
  conn.getConnection((err, conn) => {
    if (err) throw err;
    const SelectAllFrom = `SELECT * FROM departments`;

    conn.query(SelectAllFrom, (err, res) => {
      if (err) throw err;
      console.log("res", res);
    });
  });

  const a = [...range(5)];
  res.render("index", {
    title: "Express",
    range: a,
  });
});
