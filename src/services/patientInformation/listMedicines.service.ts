import { AppDataSource } from "../../data-source"
import { Patient } from "../../entities/patient.entity"
import { AppError } from "../../errors/appError"

const medicinesListService = async (id:string) => {

    const patientRepository = AppDataSource.getRepository(Patient)

    const medicines = await patientRepository .find({
        where:{
          id:id
        },
        relations:{
          medicines: true
        }
      })
      if(medicines![0]===undefined){
        throw new AppError(404,'Id not found')
      } 
    return medicines!
}

export default medicinesListService