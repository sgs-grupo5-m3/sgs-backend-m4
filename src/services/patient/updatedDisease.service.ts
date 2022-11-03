import { AppDataSource } from '../../data-source'
import { IDiseaseRequest } from '../../interfaces/patient'
import { Disease } from "../../entities/disease.entity"
import { AppError } from '../../errors/appError'

const updateDiseaseService = async({ 
    name, 
    symptoms }: IDiseaseRequest, id: string)
    : Promise<Disease | null> => {

    const diseaseRepository = AppDataSource.getRepository(Disease)

    const findDisease = await diseaseRepository.findOneBy({
        id
    })
   
    if(!findDisease){
        throw new AppError(400,"id não encontrado!")
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
