import { AppDataSource } from "../../data-source"
import { Patient } from "../../entities/patient.entity"

const diseaseListService = async (id:string) => {

    const patientRepository = AppDataSource.getRepository(Patient)

    const disease = await patientRepository .find({
        where:{
          id:id
        },
        relations:{
          disease: true
        }
      })
    //   if(disease![0]===undefined){
    //     throw new AppError(404,'Id not found')
    //   } 
    return disease!
}

export default diseaseListService