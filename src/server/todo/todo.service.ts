import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Service, type RequestHandler } from "../../lib/classes/Service";
import { Todo } from "../../db/entity/todo.entity";

export class TodoService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  getOne = async () => {
    return await this.repo
      .getRepository(Todo)
      .createQueryBuilder("Todo")
      .getOne();
  };

  getMany = async () => {
    const a = await this.repo
      .getRepository(Todo)
      .createQueryBuilder("Todo")
      .take(10)
      .printSql()
      .getMany();

    return a;
  };

  render: RequestHandler = async (req, res) => {
    const b = await this.getMany();
    console.log(
      "🚀 ~ file: todo.service.ts:33 ~ TodoService ~ render:RequestHandler= ~ b",
      b
    );
    const sayHi = (to: string = "zoo") => {
      console.log("hi!", to);
    };

    res.render(this.path, {
      title: "TODO TITLE",
      layout: this.layout("default"),
      data: {
        list: b,
        fns: [sayHi],
      },
    });
  };

  addTodoPost: RequestHandler = (req, res) => {
    // const newTodo = new Todo();
    // newTodo.content = "hi";
    // this.repo.getRepository(Todo).save(newTodo);

    console.log("req", req.body);

    // res.send({ hi: "hello" });
    res.send({ done: true });
  };
}
