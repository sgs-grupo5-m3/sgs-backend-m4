import { AppDataSource } from "../../data-source"
import { Patient } from "../../entities/patient.entity"
import { AppError } from "../../errors/appError"

const allergyListService = async (id:string) => {

    const patientRepository = AppDataSource.getRepository(Patient)

    const allergy = await patientRepository .find({
        where:{
          id:id
        },
        relations:{
          allergy: true
        }
      })
      if(allergy![0]===undefined){
        throw new AppError(404,'Id not found')
      } 
    return allergy!
}

export default allergyListService