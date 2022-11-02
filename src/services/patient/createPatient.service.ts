import { AppDataSource } from "../../data-source";
import { Patient } from "../../entities/patient.entity";
import { IPatientCreate } from "../../interfaces/patient";

import { hashSync } from "bcrypt";

const createPatientService = async ({
  name,
  birth_date,
  email,
  password,
  cpf,
}: IPatientCreate) => {
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patient = await patientRepositorey.save({
    name,
    birth_date,
    email,
    password: hashSync(password, 10),
    cpf,
  });

  return patient;
};

export default createPatientService;
