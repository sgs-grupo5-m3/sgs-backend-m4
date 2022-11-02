import { AppDataSource } from "../../data-source";
import { Medicines } from "../../entities/medicines.entity";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";
import { IMedicinesRequest } from "../../interfaces/patient/patient";

const createMedicineService = async ({
  name,
  description,
  patient,
}: IMedicinesRequest): Promise<Medicines> => {
  const medicinesRepository = AppDataSource.getRepository(Medicines);
  const patientRepository = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepository.findOneBy({
    id: patient,
  });

  if (!patientFind) {
    throw new AppError(400, "id de usuario não encontrado");
  }

  const medici = new Medicines();
  medici.name = name;
  medici.description = description;
  medici.patient = patientFind;

  const newMedici = medicinesRepository.create(medici);
  await medicinesRepository.save(medici);

  return newMedici;
};

export default createMedicineService;
