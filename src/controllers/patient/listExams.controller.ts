import { Request, Response } from "express";
import listExamsService from "../../services/patient/listExams.service";

const listExamsController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const exams = await listExamsService(userId);

  return res.status(200).json({ exams });
};

export default listExamsController;
