import { AppDataSource } from "../../data-source";
import { IExamsCreate } from "../../interfaces/patient/patient";
import { Exam } from "../../entities/exam.entity";
import { Patient } from "../../entities/patient.entity";

const createExamsService = async ({
  name,
  date,
  results_exams,
  userId,
}: IExamsCreate) => {
  const examsRepositorey = AppDataSource.getRepository(Exam);
  const patientRepositorey = AppDataSource.getRepository(Patient);

  const patients = await patientRepositorey.find();
  const patientFind = patients.find((item) => item.id === userId);

  const exam = await examsRepositorey.save({
    name,
    date,
    results_exams,
    patient: patientFind,
  });

  return exam;
};

export default createExamsService;
