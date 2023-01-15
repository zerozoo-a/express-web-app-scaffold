import { Router } from "express";
import { range } from "../../lib/range";
import { conn } from "../../db/connection";
import { homeService } from "./home.service";

export const homeController = Router();

homeController.get("/", homeService);
