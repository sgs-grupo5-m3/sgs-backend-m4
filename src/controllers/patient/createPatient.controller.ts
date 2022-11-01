import { Request, Response } from "express";
import { IPatientCreate } from "../../interfaces/patient/patient";
import createPatientService from "../../services/patient/createPatient.service";

const createPatientController = async (req: Request, res: Response) => {
  const { name, birth_date, email, password, cpf } =
    req.validatedBody as IPatientCreate;

  const patient = await createPatientService({
    name,
    birth_date,
    email,
    password,
    cpf,
  });

  res.status(201).json(patient);
};

export default createPatientController;
