import { AppDataSource } from "../../data-source";
import { Specialties } from "../../entities/specialties.entity";
import { AppError } from "../../errors/appError";

const listSpecialtiesService = async () => {
  const specialtiesRepository = AppDataSource.getRepository(Specialties);

  const specialtiesFind = await specialtiesRepository.find();

  if (specialtiesFind.length === 0) {
    throw new AppError(403, "Specialties not found");
  }

  return specialtiesFind;
};

export default listSpecialtiesService;
