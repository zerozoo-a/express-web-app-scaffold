import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import nunjucks from "nunjucks";
import { AppDataSource } from "../../db/data-source";

import type mysql from "mysql2/promise";
import type { IRouterMatcher } from "express";
import type { DataSource } from "typeorm";

export default async function expressLoader({
  app,
  db,
}: {
  app: App;
  db: { pool: mysql.Pool; conns: mysql.PoolConnection[] };
}) {
  if (!db) {
    throw new Error("DB ERROR OCCURRED");
  }

  dotenv.config();
  app.use((req, res, next) => {
    if (!process.env.COOKIE_SECRET) throw new Error("TEST ERROR");
    next();
  });
  app.use(cors());
  app.use(express.static(path.join(__dirname, `public`)));
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET || "ERROR",
      cookie: { httpOnly: true, secure: false },
      name: "session-cookie",
    })
  );
  app.use(express.static(path.join(__dirname, "../../../public")));

  app.set("view engine", "html");
  nunjucks.configure("views", { express: app, watch: true, autoescape: true });

  app.set<DB>(`db`, db);
  app.set<DataSource>(`orm`, AppDataSource);

  return app as App;
}

export type DB = { pool: mysql.Pool; conns: mysql.PoolConnection[] };
export interface App extends express.Application {
  set<T = any>(setting: string, val: T): this;
  get: (<T = any>(name: string) => T) & IRouterMatcher<this>;
}
