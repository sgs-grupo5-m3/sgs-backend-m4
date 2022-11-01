import express from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
