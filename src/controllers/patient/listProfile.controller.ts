import { Request, Response } from "express";
import listProfileService from "../../services/patient/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const allergys = await listProfileService(id);

  return res.status(200).json(allergys);
};

export default listProfileController;
