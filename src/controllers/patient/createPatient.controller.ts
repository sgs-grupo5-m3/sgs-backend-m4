import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IPatientCreate } from "../../interfaces/patient";
import createPatientService from "../../services/patient/createPatient.service";

const createPatientController = async (req: Request, res: Response) => {
  const { name, birth_date, email, password, cpf }: IPatientCreate =
    req.validatedBody as IPatientCreate;

  const patient = await createPatientService({
    name,
    birth_date,
    email,
    password,
    cpf,
  });

  return res.status(201).json(instanceToPlain(patient));
};

export default createPatientController;
