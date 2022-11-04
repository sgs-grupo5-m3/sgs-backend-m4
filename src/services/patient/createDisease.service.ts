import { AppDataSource } from "../../data-source";
import { IDiseaseRequest } from "../../interfaces/patient";
import { Disease } from "../../entities/disease.entity";
import { Patient } from "../../entities/patient.entity";

const createDiseaseService = async ({
  name,
  symptoms,
  userId,
}: IDiseaseRequest) => {
  const diseaseRepositorey = AppDataSource.getRepository(Disease);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepositorey.findOneBy({
    id: userId,
  });

  const disease = await diseaseRepositorey.save({
    name,
    symptoms,
    patient: patientFind!,
  });

  return disease;
};

export default createDiseaseService;
