import { Request, Response } from "express";
import listProfileService from "../../services/profile/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
<<<<<<< HEAD:src/controllers/profile/listProfile.controller.ts
  const id: string = req.user.id;
  const isDoctor: boolean = req.user.isDoctor
  
  const profile = await listProfileService(id, isDoctor);
=======
  const id = req.user.id;
  const profile = await listProfileService(id);
>>>>>>> a9f2532838de38fafa1300c53051f5cb9287bf5d:src/controllers/patient/listProfile.controller.ts

  delete profile?.password;

  return res.status(200).json({ profile });
};

export default listProfileController;
