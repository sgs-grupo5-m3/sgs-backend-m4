import { Router } from "express";
import createPatientController from "../controllers/patient/createPatient.controller";
import createAllergyController  from "../controllers/patient/createAllergy.controller";
import listExamsController from "../controllers/patient/listExams.controller";
import authTokenMiddleware from "../middlewares/ensureToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";
import createDiseaseController from "../controllers/patient/createDisease.controller";
import { patientCreateSchema } from "../serializers";

const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createPatientController
  );
  router.post("/exam", authTokenMiddleware, listExamsController);
  return router;
};

export default patientRouter;
