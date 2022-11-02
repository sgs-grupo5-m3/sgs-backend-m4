import { Request, Response } from "express";
import listExamsService from "../../services/patient/listExams.service";

const listExamsController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const exams = await listExamsService(id);

  return res.status(200).json(exams);
};

export default listExamsController;
