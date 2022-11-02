import { AppDataSource } from "../../data-source"
import { Allergy } from "../../entities/allergy.entiry"
import { IAllergyCreate } from "../../interfaces/patient/patient"
import { Patient } from "../../entities/patient.entity"

const createAllergyService = async ({ 
  name,
  description,
  userId 
  }: IAllergyCreate): Promise<Allergy> => {

  const allergyRepository = AppDataSource.getRepository(Allergy)
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patients = await patientRepositorey.find();
  const patientFind = patients.find((item) => item.id === userId);

  const allergy = allergyRepository.save({
      name,
      description
  })
 
  return allergy
}

export default createAllergyService;