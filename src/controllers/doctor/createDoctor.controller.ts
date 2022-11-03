import { Request, Response } from "express";
import createDoctorService from "../../services/doctor/createDoctor.service";
import { instanceToPlain } from "class-transformer";
import { IDoctorRequest } from "../../interfaces/doctor";

const createDoctorController = async (req: Request, res: Response) => {
  const { name, birth_date, email, password, cpf, crm } =
    req.validatedBody as IDoctorRequest;

  const newDoctor = await createDoctorService({
    name,
    birth_date,
    email,
    password,
    cpf,
    crm,
  });

  delete newDoctor.password

  return res.status(201).json({
    message: "Doctor Created!",
    doctor: newDoctor
  });
};

export default createDoctorController;
