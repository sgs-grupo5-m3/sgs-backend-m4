import { Express } from "express";

import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.routes";
<<<<<<< HEAD
import medicinesRouter from "./medicines.routes";
=======
import sessionRouter from "./session.routes";
>>>>>>> 79f25054a52f5b9c8869e7f68d9ac872b24a27b6

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
<<<<<<< HEAD
  app.use("/medicines", medicinesRouter());
=======
  app.use("/login", sessionRouter());
>>>>>>> 79f25054a52f5b9c8869e7f68d9ac872b24a27b6
};
