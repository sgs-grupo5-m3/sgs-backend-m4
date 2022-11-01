import express from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import "reflect-metadata";
import "express-async-errors";
import sessionRouter from "./routes/session.routes";

const app = express();

app.use(express.json());

app.use("/login", sessionRouter);

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
