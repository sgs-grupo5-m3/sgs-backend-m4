import { Request, Response } from "express";
import createDoctorService from "../../services/doctor/createDoctor.service";
import { IDoctorRequest } from "../../interfaces/doctor";

const createDoctorController = async (req: Request, res: Response) => {
  const { name, birth_date, email, password, cpf, crm, specialtie } =
    req.validatedBody as IDoctorRequest;

  const doctor = await createDoctorService({
    name,
    birth_date,
    email,
    password,
    cpf,
    crm,
    specialtie,
  });

  delete doctor.password
  delete doctor.specialties.doctor

  return res.status(201).json({
    message: "Doctor Created!!",
    doctor,
  });
};

export default createDoctorController;
