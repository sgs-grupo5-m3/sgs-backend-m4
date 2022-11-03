import { AppDataSource } from "../../data-source";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";

const listPatientDoctorService = async (cpf: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepository.findOneBy({
    cpf: cpf
  });

  if(!patientFind){
    throw new AppError(403, "Cpf not found")
  }

  return patientFind;
};

export default listPatientDoctorService;
