import { AppDataSource } from "../../data-source"
import { Allergy } from "../../entities/allergy.entiry"
import { IAllergyCreate } from "../../interfaces/patient"
import { Patient } from "../../entities/patient.entity"
import { AppError } from "../../errors/appError"

const createAllergyService = async ({ 
  name,
  description,
  patient 
  }: IAllergyCreate ): Promise<Allergy> => {

  const allergyRepository = AppDataSource.getRepository(Allergy)
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepositorey.findOneBy({
    id: patient
  });

  if (!patientFind) {
    throw new AppError(400, "id de usuario não encontrado");
  }

  const allergy = new Allergy();
  allergy.name = name;
  allergy.description = description;
  allergy.patient = patientFind;

  const newAllergy = allergyRepository.create(allergy);
  await allergyRepository.save(allergy);

  return newAllergy
}

export default createAllergyService;