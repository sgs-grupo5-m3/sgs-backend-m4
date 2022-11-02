import { Router } from "express";

import createDoctorController from "../controllers/doctor/createDoctor.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { doctorCreateSchema } from "../serializers";

const router = Router();

const doctorRouter = () => {
  router.post("", validateRequest(doctorCreateSchema), createDoctorController);

  return router;
};

export default doctorRouter;
