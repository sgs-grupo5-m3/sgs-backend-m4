import { AppDataSource } from "../../data-source";
import { Medicines } from "../../entities/medicines.entity";
import { Patient } from "../../entities/patient.entity";

const listMedicineService = async (id: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);
  const medicinesRepository = AppDataSource.getRepository(Medicines);

  const patientFind = await patientRepository.findOneBy({ id });

  const medicines = await medicinesRepository.find({
    where: {
      patient: patientFind!,
    },
  });

  return medicines;
};

export default listMedicineService;
