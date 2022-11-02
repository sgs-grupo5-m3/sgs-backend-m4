import { AppDataSource } from "../../data-source";
import { IExamsRequest } from "../../interfaces/patient";
import { Exam } from "../../entities/exam.entity";
import { Patient } from "../../entities/patient.entity";

const createExamsService = async ({
  name,
  date,
  results_exams,
  userId,
}: IExamsRequest): Promise<Exam> => {
  const examsRepositorey = AppDataSource.getRepository(Exam);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patientFind = await patientRepositorey.findOneBy({ id: userId });

  const exam = await examsRepositorey.save({
    name,
    date,
    results_exams,
    patient: patientFind!,
  });

  return exam;
};

export default createExamsService;
