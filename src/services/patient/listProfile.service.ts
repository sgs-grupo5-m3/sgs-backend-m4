import { AppDataSource } from "../../data-source";
import { Patient } from "../../entities/patient.entity";

const listProfileService = async (id: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepository.findOne({
    where: {
      id,
    },
  });

  return patientFind;
};

export default listProfileService;
