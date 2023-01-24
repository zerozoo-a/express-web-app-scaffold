import { Router } from "express";
import { User } from "../../db/entity/user.entity";
import { UserService } from "./user.service";

const userService = new UserService({
  DOMAIN: `/user/user`,
  repo: new User(),
});
