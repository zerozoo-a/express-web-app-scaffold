"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = exports.todoService = void 0;
const express_1 = require("express");
const todo_service_1 = require("./todo.service");
exports.todoService = new todo_service_1.TodoService({ DOMAIN: `/todo/todo` });
exports.todoController = (0, express_1.Router)();
exports.todoController.get("", exports.todoService.render);
exports.todoController.post("", exports.todoService.addTodoPost);
//# sourceMappingURL=todo.controller.js.map