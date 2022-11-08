import { Request, Response } from "express";
import listSpecialtiesService from "../../services/doctor/listSpecialties.service";

const listSpecialtiesController = async (req: Request, res: Response) => {
  const specialties = await listSpecialtiesService();

  return res.status(200).json({ specialties });
};

export default listSpecialtiesController;
