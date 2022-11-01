import { Request, Response } from "express";
import listExamsService from "../../services/patient/listExams.service";

const listExamsController = async (req: Request, res: Response) => {
  const exams = await listExamsService();

  return res.status(200).json(exams);
};

export default listExamsController;
