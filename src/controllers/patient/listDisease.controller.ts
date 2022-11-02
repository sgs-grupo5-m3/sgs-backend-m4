import { Request, Response } from "express";
import listDiseasesService from "../../services/patient/listDiseases.service";

const listDiseasesController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const diseases = await listDiseasesService(userId);

  return res.json(diseases);
};

export default listDiseasesController;
