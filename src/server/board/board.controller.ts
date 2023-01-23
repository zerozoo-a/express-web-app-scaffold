import { Router } from "express";
import { boardService } from "./board.service";

export const boardController = Router();

boardController.get("", boardService);
