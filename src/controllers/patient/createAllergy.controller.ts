import { Request, Response } from "express"
import { IAllergyCreate } from "../../interfaces/patient"
import createAllergyService from "../../services/patient/createAllergy.service"

const createAllergyController = async (req: Request, res: Response)=>{
    const { name, description }:IAllergyCreate = req.body

    const patient = req.user.id;

    const newAllergy = await createAllergyService({ name, description, patient});

    return res.status(201).json({
        message: "Alergia Cadastrada!",
        newAllergy,
      });
}

export default createAllergyController 