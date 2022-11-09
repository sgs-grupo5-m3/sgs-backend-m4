import { AppDataSource } from "../../data-source";
import { Medicines } from "../../entities/medicines.entity";
import { Patient } from "../../entities/patient.entity";
import { IMedicinesRequest } from "../../interfaces/patient";

const createMedicineService = async ({
  name,
  description,
  userId,
}: IMedicinesRequest): Promise<Medicines> => {
  const medicinesRepository = AppDataSource.getRepository(Medicines);
  const patientRepository = AppDataSource.getRepository(Patient);

  if(description === ""){
    description = undefined
  }
  
  const patientFind = await patientRepository.findOneBy({
    id: userId,
  });

  const medicine = await medicinesRepository.save({
    name,
    description,
    patient: patientFind!,
  });

  return medicine;
};

export default createMedicineService;
