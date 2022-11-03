import { Request, Response } from "express";
import createDiseaseService from "../../services/patient/createDisease.service";
import { IDiseaseRequest, IDiseaseSerializer } from "../../interfaces/patient";

const createDiseaseController = async (req: Request, res: Response) => {
  const { name, symptoms }: IDiseaseSerializer =
    req.validatedBody as IDiseaseSerializer;

  const userId = req.userId;

  const newDisease = await createDiseaseService({
    name,
    symptoms,
    userId,
  });

  return res.status(201).json({
    message: "Doença Cadastrada!",
    newDisease,
  });
};

export default createDiseaseController;
