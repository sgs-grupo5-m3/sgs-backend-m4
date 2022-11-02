import { Request, Response } from "express";
import listDiseasesService from "../../services/patient/listDiseases.service";

const listDiseasesController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const diseases = await listDiseasesService(id);

  return res.json(diseases);
};

export default listDiseasesController;
