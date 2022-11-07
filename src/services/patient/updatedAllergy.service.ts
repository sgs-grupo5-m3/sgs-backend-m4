import { AppDataSource } from "../../data-source";
import { IAllergyRequest } from "../../interfaces/patient";
import { Allergy } from "../../entities/allergy.entity";
import { AppError } from "../../errors/appError";

const updateAllergyService = async (
  { name, description }: IAllergyRequest,
  id: string,
  userId: string
): Promise<Allergy | null> => {
  const allergyRepository = AppDataSource.getRepository(Allergy);

  const findAllergy = await allergyRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      patient: true,
    },
  });

  if (!findAllergy) {
    throw new AppError(403, "Id not found");
  }

  if (findAllergy.patient!.id !== userId) {
    throw new AppError(403, "Cannot change another patient's allergy");
  }

  await allergyRepository.update(id, {
    name: name ? name : findAllergy.name,
    description: description ? description : findAllergy.description,
  });
  const allergy = await allergyRepository.findOneBy({
    id,
  });

  return allergy;
};

export default updateAllergyService;
