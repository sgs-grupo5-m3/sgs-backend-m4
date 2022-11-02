import { AppDataSource } from "../../data-source";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";

const listMedicineService = async (cpf: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepository.findOne({
    where: {
      cpf,
    },
  });

  if (!patientFind) {
    throw new AppError(404, "schedules not found");
  }

  return patientFind;
};

export default listMedicineService;
