import type { RequestHandler } from "express";

export const boardService: RequestHandler = (req, res) => {
  const DOMAIN = `/board/board`;

  console.log("🚀 ~ file: board.service.ts:6 ~ DOMAIN", DOMAIN);
  res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
    title: "BOARD TITLE",
    date: new Date().toLocaleTimeString(),
  });
};
