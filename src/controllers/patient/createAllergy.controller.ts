import { Request, Response } from "express";
import { IAllergySerializer } from "../../interfaces/patient";
import createAllergyService from "../../services/patient/createAllergy.service";

const createAllergyController = async (req: Request, res: Response) => {
  const { name, description }: IAllergySerializer =
    req.validatedBody as IAllergySerializer;

  const userId = req.user.id;

  const newAllergy = await createAllergyService({ name, description, userId });

  return res.status(201).json({
    message: "Allergy Created!",
    newAllergy,
  });
};

export default createAllergyController;
