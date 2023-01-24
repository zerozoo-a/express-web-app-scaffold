import { app } from "../../server/app";
import { AppDataSource } from "../../db/data-source";

import { DataSource } from "typeorm";
import type { App, DB } from "../../server/loaders/express.loader";
import { RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class Service {
  readonly DOMAIN: string;
  readonly path: string;
  readonly app: App;
  readonly repo: DataSource = AppDataSource;
  readonly DataSource: DataSource;
  readonly DB: DB;

  constructor({ DOMAIN }: { DOMAIN: string }) {
    this.DOMAIN = DOMAIN;
    this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
    this.app = app;
  }
}
