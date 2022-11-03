import { AppDataSource } from '../../data-source'
import { IMedicinesRequest } from '../../interfaces/patient'
import { Medicines } from "../../entities/medicines.entity"
import { AppError } from '../../errors/appError'

const updateMedicineService = async({ 
    name, 
    description }: IMedicinesRequest, id: string)
    : Promise<Medicines | null> => {

    const medicineRepository = AppDataSource.getRepository(Medicines)

    const findMedicine = await medicineRepository.findOneBy({
        id
    })
   
    if(!findMedicine){
        throw new AppError(400,"id não encontrado!")
    }
    await medicineRepository.update(
        id,
        {
            name: name ? name : findMedicine.name,
            description: description ? description : findMedicine.description,
        }
    )
    const medicine = await medicineRepository.findOneBy({
        id
    });
  
    return medicine;
}

export default updateMedicineService;


