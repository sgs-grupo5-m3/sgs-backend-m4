import { Request, Response } from "express";
import listDiseasesService from "../../services/patient/listDiseases.service";

const listDiseasesController = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const id = req.user.id;
  const diseases = await listDiseasesService(id);
=======
  const userId = req.user.id;

  const diseases = await listDiseasesService(userId);
>>>>>>> 58a5abe135ee4983a68db103b45d5f8b9e83d50e

  return res.json(diseases);
};

export default listDiseasesController;
