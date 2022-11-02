import { Request, Response } from "express";
import listAllergyService from "../../services/patient/listAllergys.service";

const listAllergyController = async (req: Request, res: Response) => {
  const allergy = await listAllergyService();

  return res.status(200).json(allergy);
};

export default listAllergyController;
