import { AppDataSource } from "../../data-source";
import { Allergy } from "../../entities/allergy.entity";
import { Patient } from "../../entities/patient.entity";

const listAllergyService = async (id: string) => {
  const allergyRepository = AppDataSource.getRepository(Allergy);
  const patientRepository = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepository.findOneBy({ id });

  const allergys = await allergyRepository.find({
    where: {
      patient: patientFind!,
    },
  });

  return allergys;
};

export default listAllergyService;
