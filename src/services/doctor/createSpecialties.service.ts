import { AppDataSource } from "../../data-source";
import { Doctor } from "../../entities/doctor.entity";
import { hashSync } from "bcrypt";
import { ISpecialtyRequest } from "../../interfaces/doctor";

const createSpecialtiesService = async ({
  name,
}: ISpecialtyRequest): Promise<Specialties> => {
  const specialtyRepository = AppDataSource.getRepository(Specialties);

  const specialty = await specialtyRepository.save({
    name: name,
  });

  return specialty;
};

export default createSpecialtiesService;
