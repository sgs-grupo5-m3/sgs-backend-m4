import { AppDataSource } from "../../data-source";
import { Allergy } from "../../entities/allergy.entity";
import { IAllergyRequest } from "../../interfaces/patient";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";

const createAllergyService = async ({
  name,
  description,
  userId,
}: IAllergyRequest): Promise<Allergy> => {
  const allergyRepository = AppDataSource.getRepository(Allergy);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepositorey.findOneBy({ id: userId });

  const allergy = await allergyRepository.save({
    name,
    description,
    patient: patientFind!,
  });

  return allergy;
};

export default createAllergyService;
