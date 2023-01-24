"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = void 0;
const app_1 = require("../app");
const express_1 = require("express");
const board_service_1 = require("./board.service");
const boardService = new board_service_1.BoardService({ DOMAIN: `/board/board`, app: app_1.app });
exports.boardController = (0, express_1.Router)();
exports.boardController.get("", boardService.render);
//# sourceMappingURL=board.controller.js.map