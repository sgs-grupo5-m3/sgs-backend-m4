import { Request, Response } from "express"
import { IUserAllergy } from "../../interfaces/user"

import createAllergyService from "../../services/patient/createAllergy.service"

// import { handleError, AppError } from "../erros/AppErro"

const createAllergyController = async (request: Request, response: Response)=>{
    try {
        const allergy:IUserAllergy = request.body
        const createdAllergy = await createAllergyService(allergy)
        return response.status(201).json(createdAllergy)

     } catch (error) {
        if(error instanceof Error)
        return response.status(400).json({
            message: error.message
        })
    }
}

export { createAllergyController }