import { IDoctorRequest } from "../../interfaces/doctor"; 
import { AppDataSource } from "../../data-source";
import { Doctor } from "../../entities/doctor.entity";
import { hashSync } from "bcrypt"
import { Specialties } from "../../entities/specialties.entity";

const createDoctorService = async ({ name, birth_date, email, password, cpf, crm, specialtie }: IDoctorRequest): Promise<Doctor> => {
    const doctorRepository = AppDataSource.getRepository(Doctor);
    const specialtiesRepository = AppDataSource.getRepository(Specialties)

    const specialties = await specialtiesRepository.findOneBy({
        name: specialtie
    })

    const doctor = await doctorRepository.save({
        name: name,
        birth_date: birth_date,
        email: email,
        password: hashSync(password!, 10),
        cpf: cpf,
        crm: crm,
        specialties: specialties!
    });

    

    return doctor
}

export default createDoctorService;