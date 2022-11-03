import { AppDataSource } from '../../data-source'
import { IExamsRequest } from '../../interfaces/patient'
import { Exam } from "../../entities/exam.entity"
import { AppError } from '../../errors/appError'

const updateExamService = async({ 
    name, 
    results_exams }: IExamsRequest, id: string)
    : Promise<Exam | null> => {

    const examRepository = AppDataSource.getRepository(Exam)

    const findExam = await examRepository.findOneBy({
        id
    })
   
    if(!findExam){
        throw new AppError(400,"id não encontrado!")
    }
    await examRepository.update(
        id,
        {
            name: name ? name : findExam.name,
            results_exams: results_exams ? results_exams : findExam.results_exams,
        }
    )
    const exam = await examRepository.findOneBy({
        id
    });
  
    return exam;
}

export default updateExamService;


