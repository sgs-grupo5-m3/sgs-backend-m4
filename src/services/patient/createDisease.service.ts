import { AppDataSource } from "../../data-source";
import { IDiseaseCreate } from "../../interfaces/patient/patient";
import { Disease } from "../../entities/disease.entity";
import { Patient } from "../../entities/patient.entity";

const createDiseaseService = async ({
  name,
  symptoms,
  userId,
}: IDiseaseCreate) => {
  const diseaseRepositorey = AppDataSource.getRepository(Disease);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patients = await patientRepositorey.find();
  const patientFind = patients.find((item) => item.id === userId);

  const disease = await diseaseRepositorey.save({
    name,
    symptoms
  });

  return disease;
};

export default createDiseaseService;