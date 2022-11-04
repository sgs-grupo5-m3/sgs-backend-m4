import { Request, Response } from "express";
import { IExamsRequest } from "../../interfaces/patient";
import updateExamService from "../../services/patient/updatedExam.service";

const updateExamController = async (req: Request, res: Response) => {
  const updateExam: IExamsRequest = req.body;
  const id: string = req.params.id;
  const userId: string = req.user.id;
  
  const exam = await updateExamService(updateExam, id, userId);

  return res.status(200).json({
    message: "Exam Updated!",
    exam,
  });
};

export default updateExamController;
