"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = exports.boardService = void 0;
const express_1 = require("express");
const board_service_1 = require("./board.service");
exports.boardService = new board_service_1.BoardService({ DOMAIN: `/board/board` });
exports.boardController = (0, express_1.Router)();
exports.boardController.get("", exports.boardService.render);
//# sourceMappingURL=board.controller.js.map