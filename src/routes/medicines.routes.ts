import { Router } from "express";
import createMedicineController from "../controllers/medicines/createMedicines.controller";
import listMedicinesController from "../controllers/medicines/listMedicines.controller";
import authIsAdmMiddleware from "../middlewares/ensureDoctor.middleware";
import authTokenMiddleware from "../middlewares/ensureToken.middleware";

const router = Router();

const medicinesRouter = () => {
  router.post("", authTokenMiddleware, createMedicineController);
  router.get(
    "",
    authTokenMiddleware,
    authIsAdmMiddleware,
    listMedicinesController
  );

  return router;
};

export default medicinesRouter;
