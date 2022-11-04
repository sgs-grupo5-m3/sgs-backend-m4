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
<<<<<<< HEAD
    message: "Exam Created",
    exam: newExams,
=======
    message: "Exam Created!",
    exam,
>>>>>>> 54be837c776f8e603ff5092bdf2ff5cfa18b19a8
  });
};

export default createExamsController;
