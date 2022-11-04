import { AppDataSource } from '../../data-source'
import { IMedicinesRequest } from '../../interfaces/patient'
import { Medicines } from "../../entities/medicines.entity"
import { AppError } from '../../errors/appError'

const updateMedicineService = async({ 
    name, 
    description }: IMedicinesRequest, id: string, userId: string)
    : Promise<Medicines | null> => {

    const medicineRepository = AppDataSource.getRepository(Medicines)

    const findMedicine = await medicineRepository.findOne({
        where: {
            id: id
        },
        relations: {
            patient: true
        }
    })
   
    if(!findMedicine){
        throw new AppError(403,"Id not found")
    }

    if(findMedicine.patient!.id !== userId){
        throw new AppError(403, "Cannot change another patient's medicine")
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


