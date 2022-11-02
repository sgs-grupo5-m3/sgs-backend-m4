import { AppDataSource } from "../../data-source";
import { Exam } from "../../entities/exam.entity";
import { Patient } from "../../entities/patient.entity";

const listExamsService = async (id: string) => {
  const patientRepository = AppDataSource.getRepository(Patient);
  const examsRepository = AppDataSource.getRepository(Exam);

  const patientFind = await patientRepository.findOneBy({ id });

  const exams = examsRepository.find({
    where: {
      patient: patientFind!,
    },
  });

  return exams;
};

export default listExamsService;
