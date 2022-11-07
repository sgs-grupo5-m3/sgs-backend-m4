import { Request, Response } from "express";
import listSpecialtiesService from "../../services/doctor/listSpecialties.service";

const listSpecialtiesController = async (req: Request, res: Response) => {
  const patient = await listSpecialtiesService();

  return res.status(200).json({ patient });
};

export default listSpecialtiesController;
