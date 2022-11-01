import { AppDataSource } from "../../data-source"
import { Allergy } from "../../entities/allergy.entiry"
import { IUserAllergy } from "../../interfaces/patient/patient"

const createAllergyService = async ({ name, description }: IUserAllergy): Promise<Allergy> => {
  const allergyRepository = AppDataSource.getRepository(Allergy)

  const allergy = await allergyRepository.find()

  if (name === undefined || describe === undefined) {
    throw new Error("name or describe not exists")
  }

  const newAllergy = allergyRepository.create({
      name,
      description
  })
 
  await allergyRepository.save(allergy)

  return newAllergy
}

export default createAllergyService;