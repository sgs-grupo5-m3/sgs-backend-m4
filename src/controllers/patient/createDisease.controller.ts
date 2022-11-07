import { Request, Response } from "express";
import createDiseaseService from "../../services/patient/createDisease.service";
import { IDiseaseSerializer } from "../../interfaces/patient";

const createDiseaseController = async (req: Request, res: Response) => {
  const { name, symptoms }: IDiseaseSerializer =
    req.validatedBody as IDiseaseSerializer;

  const userId = req.user.id;

  const disease = await createDiseaseService({
    name,
    symptoms,
    userId,
  });

   delete disease.patient

  return res.status(201).json({
    message: "Disease Created!",
    disease,
  });
};

export default createDiseaseController;
