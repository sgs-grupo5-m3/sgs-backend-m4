import { AppDataSource } from "../../data-source";
import { Disease } from "../../entities/disease.entity";
import { Patient } from "../../entities/patient.entity";

const listDiseasesService = async (id: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);
  const diseaseRepository = AppDataSource.getRepository(Disease);

  const patientFind = await patientRepository.findOneBy({ id });

  const diseases = await diseaseRepository.find({
    where: {
      patient: patientFind!,
    },
  });

  return diseases;
};

export default listDiseasesService;
