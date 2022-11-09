import { Request, Response } from "express";
import { ISpecialtyRequest } from "../../interfaces/doctor";
import createSpecialtiesService from "../../services/doctor/createSpecialties.service";

const createSpecialtiesController = async (req: Request, res: Response) => {
  const { name } = req.validatedBody as ISpecialtyRequest;

  const specialty = await createSpecialtiesService({
    name,
  });

  return res.status(201).json({
    message: "Specialty Created!",
    specialty,
  });
};

export default createSpecialtiesController;
