import { Request, Response } from "express"
import diseaseListService from "../../services/patientInformation/listDiease.service"
import { handleError, AppError } from "../../erros/AppErro"

const diseaseListController = async (req: Request, res: Response) => {
    const id:string = req.params.id
    try {
            const diease = await diseaseListService(id)
        
            return res.status(200).json(diease)
        } catch (err) {
            if (err instanceof AppError) {
                handleError(err, res)
            }
        }
}

export default diseaseListController