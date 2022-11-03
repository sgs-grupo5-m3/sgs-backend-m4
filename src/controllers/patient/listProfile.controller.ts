import { Request, Response } from "express";
import listProfileService from "../../services/patient/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
  const id = req.userId;
  const allergys = await listProfileService(id);

  return res.json(allergys);
};

export default listProfileController;
