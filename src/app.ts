import express from "express";
// import { appRoutes } from "./routes";
import informationRoute from "./routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use('/informations',informationRoute)


// appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
