import { app } from "../app";
import { Router } from "express";
import { BoardService } from "./board.service";

const boardService = new BoardService({ DOMAIN: `/board/board`, app });

export const boardController = Router();

boardController.get("", boardService.render);
boardController.get("/secret", boardService.secret);
