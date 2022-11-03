import { Request, Response } from "express";
import listAllergyService from "../../services/patient/listAllergys.service";

const listAllergyController = async (req: Request, res: Response) => {

  const id = req.userId;
  const allergys = await listAllergyService(id);

  return res.json(allergys);

};

export default listAllergyController;
