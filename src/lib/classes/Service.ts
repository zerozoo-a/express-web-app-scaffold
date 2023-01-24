import { app } from "../../server/app";
import { AppDataSource } from "db/data-source";
import type { App } from "../../server/loaders/express";
import { DataSource } from "typeorm";

export class Service {
  readonly DOMAIN: string;
  readonly path: string;
  readonly app: App;
  repo: DataSource = AppDataSource;

  constructor({ DOMAIN }: { DOMAIN: string }) {
    this.DOMAIN = DOMAIN;
    this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
    this.app = app;
  }
}
