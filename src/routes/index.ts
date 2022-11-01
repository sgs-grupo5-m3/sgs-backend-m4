import { Express } from "express";

import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
};
