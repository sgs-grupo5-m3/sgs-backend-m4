import { Router } from "express";

import { createAllergyController } from "../controllers/patient/createAllergy.controller";

const router = Router()

const allergyRouter = () => {
    router.post("/allergy", createAllergyController )

    return router
}

export default allergyRouter