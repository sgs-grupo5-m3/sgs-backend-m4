<<<<<<< HEAD
import "reflect-metadata";

import express from "express";

import "express-async-errors";

import { appRoutes } from "./routes";

import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
=======
import express from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import sessionRouter from "./routes/session.routes";
>>>>>>> 8186ec4 (fix: arrumando bugs)

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
