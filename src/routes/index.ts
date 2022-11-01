import { Express } from "express";
import patientRouter from "./patient.routes";
import doctorRouter from "./doctor.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
};
