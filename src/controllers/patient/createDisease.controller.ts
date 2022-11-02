import { Request, Response } from "express";
import createDiseaseService from "../../services/patient/createDisease.service";

const createDiseaseController = async (req: Request, res: Response) => {
  const { name, symptoms } = req.body;

  const userId = req.userId;

  const newDisease = await createDiseaseService({
    name,
    symptoms,
    userId,
  });

  return res.status(201).json(newDisease);
};

export default createDiseaseController;
