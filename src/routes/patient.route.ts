import { Router } from "express";

import { createAllergyController } from "../controllers/patient/createAllergy.controller";

const router = Router()

const patientRouter = () => {
    router.post("/allergy",createAllergyController)

    return router
}

export default patientRouter