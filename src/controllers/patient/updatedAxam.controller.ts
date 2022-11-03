import { Request, Response } from "express"
import { IExamsRequest } from "../../interfaces/patient"
import updateExamService from "../../services/patient/updatedExam.service";

const updateExamController = async (req: Request, res: Response) => {
   
        const updateExam: IExamsRequest = req.body;
        const id:string = req.params.id;
        const exam = await updateExamService( updateExam, id );
         
        return res.status(200).json({
                message: "Exame atualizado!",
                exam,
              });
}

export default updateExamController;