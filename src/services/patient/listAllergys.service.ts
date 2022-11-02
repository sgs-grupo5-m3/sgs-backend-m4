import { AppDataSource } from "../../data-source";
import { Allergy } from "../../entities/allergy.entiry";

const listAllergyService = async () => {
  const allergyRepository = AppDataSource.getRepository(Allergy);

  const allergys = allergyRepository.find();

  return allergys;
};

export default listAllergyService;
