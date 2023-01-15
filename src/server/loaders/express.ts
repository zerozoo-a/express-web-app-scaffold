import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import nunjucks from "nunjucks";
import { Pool } from "mysql2";

export default async ({ app, db }: { app: express.Application; db?: Pool }) => {
  dotenv.config();
  app.use((req, res, next) => {
    if (!process.env.COOKIE_SECRET) throw new Error("TEST ERROR");
    next();
  });
  app.use(cors());
  app.use(express.static(path.join(__dirname, `plubic`)));
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
  app.set("view engine", "html");
  nunjucks.configure("views", { express: app, watch: true, autoescape: true });
  app.set("db", db);

  return app;
};
