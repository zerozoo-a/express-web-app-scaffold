import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Service, type RequestHandler } from "../../lib/classes/Service";
import { Todo } from "../../db/entity/todo.entity";

export class TodoService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = (req, res) => {
    res.render(this.path, {
      title: "TODO TITLE",
      layout: this.layout("default"),
      data: {
        list: ["a", "b", "c"],
      },
    });
  };

  addTodoPost: RequestHandler = (req, res) => {
    const newTodo = new Todo();
    newTodo.content = "hi";
    this.repo.getRepository(Todo).save(newTodo);

    console.log("req", req.body);

    res.send({ hi: "hello" });
  };
}
