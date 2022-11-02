import { Request, Response } from "express";
import listDiseasesService from "../../services/patient/listDiseases.controller";

const listDiseasesController = async (req: Request, res: Response) => {
  const diseases = await listDiseasesService();

  return res.status(200).json(diseases);
};

export default listDiseasesController;
