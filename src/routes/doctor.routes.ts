import { Router } from "express";

import createDoctorController from "../controllers/doctor/createDoctor.controller";

const router = Router()

const doctorRouter = () => {
    router.post("", createDoctorController )

    return router
}




export default doctorRouter