import { Request, Response } from "express"
import { IAllergyCreate } from "../../interfaces/patient/patient"
import createAllergyService from "../../services/patient/createAllergy.service"

const createAllergyController = async (req: Request, res: Response)=>{
    const { name, description }:IAllergyCreate = req.body

    const userId = req.userId;

    const newAllergy = await createAllergyService({ 
        name, 
        description, 
        userId
    });

    return res.status(201).json(newAllergy);
}

export default createAllergyController 