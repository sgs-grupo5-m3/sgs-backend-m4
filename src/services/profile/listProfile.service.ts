import { AppDataSource } from "../../data-source";
import { Doctor } from "../../entities/doctor.entity";
import { Patient } from "../../entities/patient.entity";

const listProfileService = async (id: string, isDoctor: boolean) => {
  
  if(isDoctor) {
    const doctorRepository = AppDataSource.getRepository(Doctor);

    const doctorFind = await doctorRepository.findOne({
      where: {
        id,
      }, relations: {
        specialties: true
      }
    });

    return doctorFind;
  }
  
  const patientRepository = AppDataSource.getRepository(Patient);
  
  const patientFind = await patientRepository.findOne({
    where: {
      id,
    },
  });

  return patientFind;
};

export default listProfileService;
