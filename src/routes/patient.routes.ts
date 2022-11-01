import { Router } from "express";
import createPatientController from "../controllers/patient/createPatient.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { patientCreateSchema } from "../serializers";

const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createPatientController
  );

  return router;
};

export default patientRouter;
