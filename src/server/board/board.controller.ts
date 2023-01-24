import { Router } from "express";
import { BoardService } from "./board.service";

const boardService = new BoardService({ DOMAIN: `/board/board` });

export const boardController = Router();

// boardController.get("", boardService.render);
