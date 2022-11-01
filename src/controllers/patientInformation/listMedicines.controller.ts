import { Request, Response } from "express"
import medicinesListService from "../../services/patientInformation/listMedicines.service"
import { handleError, AppError } from "../../erros/AppErro"

const medicineListController = async (req: Request, res: Response) => {
    const id:string = req.params.id
    try {
            const medicine = await medicinesListService(id)
        
            return res.status(200).json(medicine)
        } catch (err) {
            if (err instanceof AppError) {
                handleError(err, res)
            }
        }
}

export default medicineListController