import { AppDataSource } from "../../data-source";
import { Medicines } from "../../entities/medicines.entity";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";
import { IMedicinesRequest } from "../../interfaces/patient";

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

  const medicine = await medicinesRepository.save({
    name,
    description,
    patient: patientFind!,
  });

  return medicine;
};

export default createMedicineService;
