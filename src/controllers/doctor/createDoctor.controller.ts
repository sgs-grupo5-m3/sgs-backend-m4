import { Request, Response } from "express";
import createDoctorService from "../../services/doctor/createDoctor.service";
import {instanceToPlain} from "class-transformer"

const createDoctorController = async (req: Request, res: Response) => {

    const { name, birth_date, email, password, cpf, crm } = req.body
   
    const newDoctor = await createDoctorService({name, birth_date, email, password, cpf, crm})

    return res.status(201).json(instanceToPlain(newDoctor))
}

export default createDoctorController;