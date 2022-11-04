import { Express } from "express";

import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.routes";
import profileRouter from "./profile.routes";
import sessionRouter from "./session.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
  app.use("/login", sessionRouter());
<<<<<<< HEAD
  app.use("/profile", profileRouter())
=======
>>>>>>> a9f2532838de38fafa1300c53051f5cb9287bf5d
};
