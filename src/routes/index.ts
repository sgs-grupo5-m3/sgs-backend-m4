// import { Express } from "express";
import allergyListController from "../controllers/patientInformation/listAllergy.controller";
import diseaseListController from "../controllers/patientInformation/listDiease.controller";
import examListController from "../controllers/patientInformation/listExam.controller";
import medicineListController from "../controllers/patientInformation/listMedicines.controller";
import { Router } from "express";

// export const appRoutes = (app: Express) => {};

const informationRoute = Router();

informationRoute.get('allergy/:id',allergyListController)
informationRoute.get('disease/:id',diseaseListController)
informationRoute.get('exam/:id',examListController)
informationRoute.get('medicine/:id',medicineListController)

export default informationRoute;