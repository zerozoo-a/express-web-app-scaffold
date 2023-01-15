import express, { ErrorRequestHandler } from "express";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import nunjucks from "nunjucks";
import { Error2 } from "../lib/classes/ErrorHandler";
import { homeController } from "./home/home.controller";

dotenv.config();
export const app = express();

// validate
app.use((req, res, next) => {
  if (!process.env.COOKIE_SECRET) throw new Error("TEST ERROR");
  next();
});

// middlewares
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
app.use("/", (req, res, next) => {
  res.cookie("name", "zerozoo", {
    expires: new Date(Date.now() + 50000),
    httpOnly: true,
    secure: true,
  });
  next();
});
app.set("view engine", "html");
nunjucks.configure("views", { express: app, watch: true, autoescape: true });

// routes
app.use("/", homeController);

app.get("/about", (req, res) => {
  res.render("about", {
    title: "ABOUT",
    data: "aaaaaaaaaaaaaaa",
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("name");
  res.send("bye!");
});

app.use((req, res, next) => {
  const error = new Error2(`${req.method} ${req.url} 라우터가 없습니다.`, 404);
  next(error);
});

// error middleware
const aError: ErrorRequestHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
};
app.use(aError);
