import { AppDataSource } from "../../data-source"
import { Patient } from "../../entities/patient.entity"
import { AppError } from "../../errors/appError"

const examListService = async (id:string) => {

    const patientRepository = AppDataSource.getRepository(Patient)

    const exam = await patientRepository .find({
        where:{
          id:id
        },
        relations:{
          exam: true
        }
      })
      if(exam![0]===undefined){
        throw new AppError(404,'Id not found')
      } 
    return exam!
}

export default examListService