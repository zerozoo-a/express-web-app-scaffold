import { Router } from "express";
import { HomeService } from "./home.service";

export const homeService = new HomeService({ DOMAIN: `/home/home` });

export const homeController = Router();

homeController.get("", homeService.render);
