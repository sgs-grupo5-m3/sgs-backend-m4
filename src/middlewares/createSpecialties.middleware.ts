import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Specialties } from "../entities/specialties.entity";
import { AppError } from "../errors/appError";

const createSpecialtiesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const specialtyRepository = AppDataSource.getRepository(Specialties);
  const specialty = await specialtyRepository.find();
  const specialtyAleradyExists = specialty.find((elem) => elem.name === name);

  if (specialtyAleradyExists) {
    throw new AppError(409, "Specialty already exists");
  }

  next();
};

export default createSpecialtiesMiddleware;
