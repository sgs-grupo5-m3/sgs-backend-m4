import { Express } from "express";
import doctorRouter from "./doctor.routes";
import allergyRouter from "./allergy.route";

export const appRoutes = (app: Express) => {
    app.use("/doctor", doctorRouter())
    app.use("/patient", allergyRouter())
};
