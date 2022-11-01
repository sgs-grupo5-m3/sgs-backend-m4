import { Request, Response } from "express"
import allergyListService from "../../services/patientInformation/listAllergy.service"
// import { handleError, AppError } from "../erros/AppErro"

const allergyListController = async (req: Request, res: Response) => {
    const id:string = req.params.id
    try {
            const allergy = await allergyListService(id)
        
            return res.status(200).json(allergy)
        } catch (err) {
            // if (err instanceof AppError) {
            //     handleError(err, res)
            // }
        }
}

export default allergyListController