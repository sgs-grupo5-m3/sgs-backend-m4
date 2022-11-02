import { Request, Response } from "express";
import createDiseaseService from "../../services/patient/createDisease.service";
import { IDiseaseCreate } from "../../interfaces/patient";

const createDiseaseController = async (req: Request, res: Response) => {
  const { name, symptoms }:IDiseaseCreate = req.body;

  const patient = req.user.id;

  const newDisease = await createDiseaseService({
    name,
    symptoms,
    patient,
  });

  return res.status(201).json({
    message: "Doensa Cadastrada!",
    newDisease,
  });
};

export default createDiseaseController;
