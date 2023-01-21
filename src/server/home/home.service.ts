import type { RequestHandler } from "express";
import Pool from "mysql2/typings/mysql/lib/Pool";

export const homeService: RequestHandler = (req, res) => {
  const DOMAIN = `/home/home` as const;
  const conn = req.app.get("db") as Pool;
  let result;
  conn.getConnection((err, conn) => {
    if (err) throw err;
    const SelectAllFrom = `SELECT * FROM departments`;

    conn.query(SelectAllFrom, (err, res) => {
      if (err) throw err;
      result = res;
    });
  });

  res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
    title: "HOME TITLE",
    date: new Date(),
  });
};

/**
 * db를 promise 세팅으로 돌리기
 * app.get('db')에 타입이 따라오게 하기
 */
