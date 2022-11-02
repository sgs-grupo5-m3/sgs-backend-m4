import { instanceToPlain } from "class-transformer";
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

<<<<<<< HEAD
  return res.status(201).json(instanceToPlain(patient));
=======
  res.status(201).json(instanceToPlain(patient));
>>>>>>> 08f812511ff1163357cdd5a8c1d40805363a5a2b
};

export default createPatientController;
