import { Router } from "express";
import createPatientController from "../controllers/patient/createPatient.controller";
import createUserMiddleware from "../middlewares/createUser.middleware";
import listExamsController from "../controllers/patient/listExams.controller";
import authTokenMiddleware from "../middlewares/ensureToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";
import { patientCreateSchema } from "../serializers";

const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createUserMiddleware,
    createPatientController
  );
  router.post("/exam", authTokenMiddleware, listExamsController);
  return router;
};

export default patientRouter;
