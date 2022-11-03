import { AppDataSource } from '../../data-source'
import { IAllergyRequest } from '../../interfaces/patient'
import { Allergy } from "../../entities/allergy.entiry"
import { AppError } from '../../errors/appError'
const updateAllergyService = async({ 
    name, 
    description }: IAllergyRequest, id: string)
    : Promise<Allergy | null> => {

    const allergyRepository = AppDataSource.getRepository(Allergy)

    const findAllergy = await allergyRepository.findOneBy({
        id
    })
   
    if(!findAllergy){
        throw new AppError(400,"id não encontrado!")
    }
    await allergyRepository.update(
        id,
        {
            name: name ? name : findAllergy.name,
            description: description ? description : findAllergy.description,
        }
    )
    const allergy = await allergyRepository.findOneBy({
        id
    })
  
    return allergy
}

export default updateAllergyService;







