import { Express } from "express";
import patientRouter from "./patient.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
};
