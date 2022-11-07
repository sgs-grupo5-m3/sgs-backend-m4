import { AppDataSource } from "../../data-source";
import { IExamsRequest } from "../../interfaces/patient";
import { Exam } from "../../entities/exam.entity";
import { AppError } from "../../errors/appError";

const updateExamService = async (
  { name, date, results_exams }: IExamsRequest,
  id: string,
  userId: string
): Promise<Exam | null> => {
  const examRepository = AppDataSource.getRepository(Exam);

  const findExam = await examRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      patient: true,
    },
  });

  if (!findExam) {
    throw new AppError(403, "Id not found");
  }

  if (findExam.patient!.id !== userId) {
    throw new AppError(403, "Cannot change another patient's exam");
  }

  await examRepository.update(id, {
    name: name ? name : findExam.name,
    date: date ? date : findExam.date,
    results_exams: results_exams ? results_exams : findExam.results_exams,
  });
  const exam = await examRepository.findOneBy({
    id,
  });

  return exam;
};

export default updateExamService;
