import { Router } from "express";
import createPatientController from "../controllers/patient/createPatient.controller";
import { createAllergyController } from "../controllers/patient/createAllergy.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { patientCreateSchema } from "../serializers";

const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createPatientController
  );
  router.post("/allergy",createAllergyController)
  return router;
};

export default patientRouter;
