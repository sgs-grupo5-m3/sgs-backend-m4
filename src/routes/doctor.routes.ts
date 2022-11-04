import { Router } from "express";

import createUserMiddleware from "../middlewares/createUser.middleware";
import authIsDoctorMiddleware from "../middlewares/authIsDoctor.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";

import createDoctorController from "../controllers/doctor/createDoctor.controller";
import listPatientDoctorController from "../controllers/doctor/listPatientDoctor.controller";

import { doctorCreateSchema } from "../serializers";

const router = Router();

const doctorRouter = () => {
  router.post("", validateRequest(doctorCreateSchema), createUserMiddleware, createDoctorController);
  router.get("/patient/:cpf", authTokenMiddleware, authIsDoctorMiddleware, listPatientDoctorController)

  return router;
};

export default doctorRouter;
