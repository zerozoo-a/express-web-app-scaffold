import { Router } from "express";
import { homeService } from "./home.service";

export const homeController = Router();

homeController.get("", homeService);
