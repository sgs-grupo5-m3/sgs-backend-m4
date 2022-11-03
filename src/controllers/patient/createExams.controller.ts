import { Request, Response } from "express";
import createExamsService from "../../services/patient/createExams.service";

const createExamsController = async (req: Request, res: Response) => {
  const { name, date, results_exams } = req.body;

  const userId = req.user.id;

  const newExams = await createExamsService({
    name,
    date,
    results_exams,
    userId,
  });

  return res.status(201).json({
<<<<<<< HEAD
    message: "Exame Cadastrado",
    exam: newExams,
=======
    message: "Exam Created!",
    newExams,
>>>>>>> 3d8236aed35ed12d3c149a07e9dabefb8a067d0e
  });
};

export default createExamsController;
