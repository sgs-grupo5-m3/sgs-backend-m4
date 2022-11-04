import { Router } from "express";

import {
  allergiesCreateSchema,
  diseasesCreateSchema,
  examsCreateSchema,
  medicinesCreateSchema,
  patientCreateSchema,
} from "../serializers";

import authTokenMiddleware from "../middlewares/authToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";
import createUserMiddleware from "../middlewares/createUser.middleware";


import createPatientController from "../controllers/patient/createPatient.controller";
import createAllergyController from "../controllers/patient/createAllergy.controller";
import createDiseaseController from "../controllers/patient/createDisease.controller";
import createExamsController from "../controllers/patient/createExams.controller";
import createMedicineController from "../controllers/patient/createMedicines.controller";

import listAllergyController from "../controllers/patient/listAllergys.controller";
import listDiseasesController from "../controllers/patient/listDisease.controller";
import listExamsController from "../controllers/patient/listExams.controller";
import listMedicinesController from "../controllers/patient/listMedicines.controller";

import updateAllergyController from "../controllers/patient/updatedAllergy.controller";
import updateDiseaseController from "../controllers/patient/updatedDisease.controller";
import updateExamController from "../controllers/patient/updatedExam.controller";
import updateMedicineController from "../controllers/patient/updatedMedicine.controller";
import listProfileController from "../controllers/patient/listProfile.controller";


const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createUserMiddleware,
    createPatientController
  );

  router.get("", authTokenMiddleware, listProfileController)

  router.post(
    "/exam",
    authTokenMiddleware,
    validateRequest(examsCreateSchema),
    createExamsController
  );

  router.get("/exam", authTokenMiddleware, listExamsController);

  router.patch("/exam/:id", authTokenMiddleware, updateExamController)

  router.post(
    "/medicine",
    authTokenMiddleware,
    validateRequest(medicinesCreateSchema),
    createMedicineController
  );

  router.get("/medicine", authTokenMiddleware, listMedicinesController);

  router.patch("/medicine/:id", authTokenMiddleware, updateMedicineController)

  router.post(
    "/allergy",
    authTokenMiddleware,
    validateRequest(allergiesCreateSchema),
    createAllergyController
  );

  router.get("/allergy", authTokenMiddleware, listAllergyController);

  router.patch("/allergy/:id", authTokenMiddleware, updateAllergyController)

  router.post(
    "/disease",
    authTokenMiddleware,
    validateRequest(diseasesCreateSchema),
    createDiseaseController
  );

  router.get("/disease", authTokenMiddleware, listDiseasesController);

  router.patch("/disease/:id", authTokenMiddleware, updateDiseaseController)

  return router;
};

export default patientRouter;
