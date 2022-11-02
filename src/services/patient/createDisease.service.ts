import { AppDataSource } from "../../data-source";
import { IDiseaseCreate } from "../../interfaces/patient";
import { Disease } from "../../entities/disease.entity";
import { Patient } from "../../entities/patient.entity";
import { AppError } from "../../errors/appError";

const createDiseaseService = async ({
  name,
  symptoms,
  patient,
}: IDiseaseCreate) => {
  const diseaseRepositorey = AppDataSource.getRepository(Disease);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepositorey.findOneBy({
    id: patient
  });

  if (!patientFind) {
    throw new AppError(400, "id de usuario não encontrado");
  }

  const disease = new Disease();
  disease.name = name;
  disease.symptoms = symptoms;
  disease.patient = patientFind;

  const newDisease = diseaseRepositorey.create(disease);
  await diseaseRepositorey .save(disease);

  return newDisease
};

export default createDiseaseService;