import { Express } from "express";
import doctorRouter from "./doctor.routes";

export const appRoutes = (app: Express) => {
    app.use("/doctor", doctorRouter())
};
