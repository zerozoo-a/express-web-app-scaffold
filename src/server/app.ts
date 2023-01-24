import express, { ErrorRequestHandler } from "express";
import dotenv from "dotenv";

dotenv.config();
import type { App } from "./loaders/express";

export const app: App = express();
