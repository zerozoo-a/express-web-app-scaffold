import { homeController } from "../home/home.controller";
import { aboutController } from "../about/about.controller";
import { boardController } from "../board/board.controller";

import type express from "express";

export async function routeLoader({ app }: { app: express.Application }) {
  app.use("/", homeController);
  app.use("/about", aboutController);
  app.use("/board", boardController);
}
