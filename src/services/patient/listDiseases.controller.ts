import { AppDataSource } from "../../data-source";
import { Disease } from "../../entities/disease.entity";

const listDiseasesService = async () => {
  const diseaseRepository = AppDataSource.getRepository(Disease);

  const diseases = diseaseRepository.find();

  return diseases;
};

export default listDiseasesService;
