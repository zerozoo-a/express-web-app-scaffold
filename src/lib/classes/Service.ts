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

interface Methods {}
interface Props {
  title: string;
  layout: ValueOf<Theme>;
  components?: unknown;
}

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
  protected props: Props;

  constructor({ DOMAIN }: { DOMAIN: string }) {
    this.DOMAIN = DOMAIN;
    this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
    this.app = app;
    this.props = {
      title: this.constructor.name,
      layout: this.layout("default"),
      components: [],
    };
  }
}
