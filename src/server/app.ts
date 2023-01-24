import express, { ErrorRequestHandler } from "express";
import dotenv from "dotenv";

dotenv.config();
import type { App } from "./loaders/express.loader";

export const app: App = express();
