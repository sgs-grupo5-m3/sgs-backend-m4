import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IPatientCreate } from "../../interfaces/patient";
import createPatientService from "../../services/patient/createPatient.service";
import { instanceToPlain } from "class-transformer";

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

<<<<<<< HEAD
  return res.status(201).json(instanceToPlain(patient));
=======
  res.status(201).json(instanceToPlain(patient));
>>>>>>> 08f812511ff1163357cdd5a8c1d40805363a5a2b
};

export default createPatientController;
