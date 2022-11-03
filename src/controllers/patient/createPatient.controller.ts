import { Request, Response } from "express";
import { IPatientRequest } from "../../interfaces/patient";
import createPatientService from "../../services/patient/createPatient.service";
import { instanceToPlain } from "class-transformer";

const createPatientController = async (req: Request, res: Response) => {
  const { name, birth_date, email, password, cpf }: IPatientRequest =
    req.validatedBody as IPatientRequest;

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
