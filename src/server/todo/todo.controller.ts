import { Router } from "express";
import { TodoService } from "./todo.service";

export const todoService = new TodoService({ DOMAIN: `/todo/todo` });

export const todoController = Router();

todoController.get("", todoService.render);
todoController.post("", todoService.addTodoPost);
