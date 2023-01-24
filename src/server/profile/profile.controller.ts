import { Router } from "express";
import { ProfileService } from "./profile.service";

const profileService = new ProfileService({
  DOMAIN: `/profile/profile`,
});

export const profileController = Router();

profileController.get("", profileService.render);
