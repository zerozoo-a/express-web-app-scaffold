import { homeController } from "../home/home.controller";
import { aboutController } from "../about/about.controller";
import { boardController } from "../board/board.controller";
import { profileController } from "../profile/profile.controller";
import { userController } from "../user/user.controller";

import type express from "express";
import { signupController } from "../signup/signup.controller";

export async function routeLoader({ app }: { app: express.Application }) {
  app.use("/", homeController);
  app.use("/about", aboutController);
  app.use("/board", boardController);
  app.use("/profile", profileController);
  app.use("/user", userController);
  app.use("/signup", signupController);
}
