import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IPatientRequest } from "../../interfaces/patient";
import createPatientService from "../../services/patient/createPatient.service";

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
  delete patient.password

  return res.status(201).json({
      message: "Patient Created!",
      patient: patient
    });
};

export default createPatientController;
