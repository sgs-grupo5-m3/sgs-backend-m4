import { Request, Response } from "express";
import listProfileService from "../../services/profile/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
  const id: string = req.user.id;
  const isDoctor: boolean = req.user.isDoctor
  
  const profile = await listProfileService(id, isDoctor);

  delete profile?.password

  return res.status(200).json(profile);
};

export default listProfileController;
