import { Request, Response } from "express";
import { IExamsSerilizer } from "../../interfaces/patient";
import createExamsService from "../../services/patient/createExams.service";

const createExamsController = async (req: Request, res: Response) => {
  const { name, date, results_exams }: IExamsSerilizer =
    req.validatedBody as IExamsSerilizer;

  const userId = req.user.id;

  const exams = await createExamsService({
    name,
    date,
    results_exams,
    userId,
  });

  delete exams.patient

  return res.status(201).json({
    message: "Exam Created!",
    exams,
  });
};

export default createExamsController;
