import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Doctor } from "../entities/doctor.entity";
import { Patient } from "../entities/patient.entity";
import { AppError } from "../errors/appError";

const createUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cpf, crm } = req.body;

  const patientRepository = AppDataSource.getRepository(Patient);
  const patients = await patientRepository.find();
  const patientEmailAleradyExists = patients.find(
    (user) => user.email === email
  );
  const patientCpfAleradyExists = patients.find((user) => user.cpf === cpf);
  if (patientEmailAleradyExists || patientCpfAleradyExists) {
    throw new AppError(409, "User already exists");
  }

  const doctorRepository = AppDataSource.getRepository(Doctor);
  const doctors = await doctorRepository.find();
  const doctorEmailAleradyExists = doctors.find((user) => user.email === email);
  const doctorCpfAleradyExists = doctors.find((user) => user.cpf === cpf);
  const doctorCrmAleradyExists = doctors.find((user) => user.crm === crm);
  if (
    doctorEmailAleradyExists ||
    doctorCpfAleradyExists ||
    doctorCrmAleradyExists
  ) {
    throw new AppError(409, "User already exists");
  }

  next();
};

export default createUserMiddleware;
