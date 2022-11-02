import { AppDataSource } from "../../data-source";
import { Exam } from "../../entities/exam.entity";

const listExamsService = async () => {
  const examsRepository = AppDataSource.getRepository(Exam);

  const exams = examsRepository.find();

  return exams;
};

export default listExamsService;
