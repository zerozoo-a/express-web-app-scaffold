import { Router } from "express";
import { AboutService } from "./about.service";

export const aboutService = new AboutService({ DOMAIN: `/about/about` });

export const aboutController = Router();

aboutController.get("", aboutService.render);
