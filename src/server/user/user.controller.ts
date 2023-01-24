import { Router } from "express";
import { User } from "../../db/entity/user.entity";
import { UserService } from "./user.service";

const userService = new UserService({
  DOMAIN: `/user/user`,
});

export const userController = Router();

userController.get("", userService.render);
