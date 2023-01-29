import { homeController } from "../home/home.controller";
import { aboutController } from "../about/about.controller";
import { boardController } from "../board/board.controller";
import { profileController } from "../profile/profile.controller";
import { userController } from "../user/user.controller";
import { signupController } from "../signup/signup.controller";
import { todoController } from "../todo/todo.controller";

import type express from "express";

export async function routeLoader({ app }: { app: express.Application }) {
  app.use("/", homeController);
  app.use("/about", aboutController);
  app.use("/board", boardController);
  app.use("/profile", profileController);
  app.use("/user", userController);
  app.use("/signup", signupController);
  app.use("/todo", todoController);
}
