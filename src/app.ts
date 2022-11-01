import express from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
