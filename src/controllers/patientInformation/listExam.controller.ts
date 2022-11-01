import { Request, Response } from "express"
import examListService from "../../services/patientInformation/listExam.service"
import { handleError, AppError } from "../../erros/AppErro"

const examListController = async (req: Request, res: Response) => {
    const id:string = req.params.id
    try {
            const exam = await examListService(id)
        
            return res.status(200).json(exam)
        } catch (err) {
            if (err instanceof AppError) {
                handleError(err, res)
            }
        }
}

export default examListController