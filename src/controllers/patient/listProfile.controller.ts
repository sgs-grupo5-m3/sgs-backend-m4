import { Request, Response } from "express";
import listProfileService from "../../services/patient/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const profile = await listProfileService(id);

  delete profile?.password;

  return res.status(200).json({ profile });
};

export default listProfileController;
