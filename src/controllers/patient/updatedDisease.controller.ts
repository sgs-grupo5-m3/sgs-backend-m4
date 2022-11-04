import { Request, Response } from "express";
import { IDiseaseRequest } from "../../interfaces/patient";
import updateDiseaseService from "../../services/patient/updatedDisease.service";

const updateDiseaseController = async (req: Request, res: Response) => {
  const updateDisease: IDiseaseRequest = req.body;
  const id: string = req.params.id;
  const userId: string = req.user.id;
  
  const disease = await updateDiseaseService(updateDisease, id, userId);

  return res.status(200).json({
    message: "Disease Updated!",
    disease,
  });
};

export default updateDiseaseController;
