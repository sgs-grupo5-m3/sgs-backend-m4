import { AppDataSource } from "../../data-source"
import { Patient } from "../../entities/patient.entity"

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
    //   if(category![0]===undefined){
    //     throw new AppError(404,'Id not found')
    //   } 
    return exam!
}

export default examListService