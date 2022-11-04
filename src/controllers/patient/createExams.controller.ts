import { Request, Response } from "express";
import createExamsService from "../../services/patient/createExams.service";

const createExamsController = async (req: Request, res: Response) => {
  const { name, date, results_exams } = req.body;

  const userId = req.user.id;

  const exam = await createExamsService({
    name,
    date,
    results_exams,
    userId,
  });

  delete exam.patient;

  return res.status(201).json({
    message: "Exam Created",
    exam,
  });
};

export default createExamsController;
