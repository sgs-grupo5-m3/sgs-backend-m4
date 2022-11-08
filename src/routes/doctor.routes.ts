import { Router } from "express";

import createUserMiddleware from "../middlewares/createUser.middleware";
import authIsDoctorMiddleware from "../middlewares/authIsDoctor.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";

import createDoctorController from "../controllers/doctor/createDoctor.controller";
import listPatientDoctorController from "../controllers/doctor/listPatientDoctor.controller";

import { doctorCreateSchema } from "../serializers";
import createSpecialtiesMiddleware from "../middlewares/createSpecialties.middleware";
import createSpecialtiesController from "../controllers/doctor/createSpecialties.controller";
import listSpecialtiesController from "../controllers/doctor/listSpecialties.controller";

const router = Router();

const doctorRouter = () => {
  router.post(
    "",
    validateRequest(doctorCreateSchema),
    createUserMiddleware,
    createDoctorController
  );
  router.get(
    "/patient/:cpf",
    authTokenMiddleware,
    authIsDoctorMiddleware,
    listPatientDoctorController
  );
  router.post(
    "/specialties",
    createSpecialtiesMiddleware,
    createSpecialtiesController
  );
  router.get(
    "/specialties",
    listSpecialtiesController
  );

  return router;
};

export default doctorRouter;
