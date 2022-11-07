import { Request, Response } from "express";
import listAllergyService from "../../services/patient/listAllergys.service";

const listAllergyController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const allergys = await listAllergyService(id);

  return res.status(200).json({ allergys });
};

export default listAllergyController;
