import { Request, Response } from "express";
import { IAllergySerializer } from "../../interfaces/patient";
import createAllergyService from "../../services/patient/createAllergy.service";

const createAllergyController = async (req: Request, res: Response) => {
  const { name, description }: IAllergySerializer =
    req.validatedBody as IAllergySerializer;

  const userId = req.userId;

  const newAllergy = await createAllergyService({ name, description, userId });

  return res.status(201).json({
    message: "Alergia Cadastrada!",
    newAllergy,
  });
};

export default createAllergyController;
