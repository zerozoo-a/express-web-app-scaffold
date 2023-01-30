import { app } from "../../server/app";
import { AppDataSource } from "../../db/data-source";

import { DataSource } from "typeorm";
import type { App, DB } from "../../server/loaders/express.loader";
import type { RequestHandler, Request, Response, NextFunction } from "express";

export { RequestHandler };

interface Theme {
  default: "../../index.html";
}
type ValueOf<T> = T[keyof T];

type Render<T = {}> = (
  req: Request,
  res: Response,
  props?: T,
  next?: NextFunction
) => void;

interface Methods {}

export class Service implements Methods {
  protected readonly DOMAIN: string;
  protected readonly path: string;
  protected readonly app: App;
  protected readonly repo: DataSource = AppDataSource;
  protected readonly DataSource: DataSource;
  protected readonly DB: DB;
  protected readonly theme: Theme = {
    default: "../../index.html",
  };
  protected readonly layout = (key: keyof Theme): ValueOf<Theme> => {
    return this.theme[key];
  };
  protected readonly PWD: string = process.env.PWD ?? "";

  constructor({ DOMAIN }: { DOMAIN: string }) {
    this.DOMAIN = DOMAIN;
    this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
    this.app = app;
    if (this.PWD === "") throw new Error("PWD");
  }
}
