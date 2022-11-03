import { AppDataSource } from '../../data-source'
import { IDiseaseRequest } from '../../interfaces/patient'
import { Disease } from "../../entities/disease.entity"
import { AppError } from '../../errors/appError'

const updateDiseaseService = async({ 
    name, 
    symptoms }: IDiseaseRequest, id: string, userId: string)
    : Promise<Disease | null> => {

    const diseaseRepository = AppDataSource.getRepository(Disease)

    const findDisease = await diseaseRepository.findOne({
        where: {
            id: id
        },
        relations: {
            patient: true
        }
    })
   
    if(!findDisease){
        throw new AppError(400,"Id not found")
    }

    if(findDisease.patient.id !== userId){
        throw new AppError(400, "Cannot change another patient's disease")
    }

    await diseaseRepository.update(
        id,
        {
            name: name ? name : findDisease.name,
            symptoms: symptoms ? symptoms : findDisease.symptoms,
        }
    )
    const disease = await diseaseRepository.findOneBy({
        id
    });
  
    return disease;
}

export default updateDiseaseService;
