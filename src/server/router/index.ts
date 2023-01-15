import { Router } from "express";
import { range } from "../../lib/range";

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const a = [...range(5)];
  res.render("index", {
    title: "Express",
    range: a,
  });
});
