import { Router } from "express";
import { aboutService } from "./about.service";

export const aboutController = Router();

aboutController.get("", aboutService);
