import { Router } from "express";
import createMedicineController from "../controllers/patient/createMedicines.controller";
import listMedicinesController from "../controllers/patient/listMedicines.controller";
import authTokenMiddleware from "../middlewares/ensureToken.middleware";

const router = Router();

const medicinesRouter = () => {
  router.post("", authTokenMiddleware, createMedicineController);
  router.get("", authTokenMiddleware, listMedicinesController);

  return router;
};

export default medicinesRouter;
