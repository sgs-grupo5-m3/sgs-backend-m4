import { IDoctorRequest } from "../../interfaces/doctor"; 
import { AppDataSource } from "../../data-source";
import { Doctor } from "../../entities/doctor.entity";
import { hashSync } from "bcrypt"

const createDoctorService = async ({ name, birth_date, email, password, cpf, crm }: IDoctorRequest): Promise<Doctor> => {
    const doctorRepository = AppDataSource.getRepository(Doctor);

    const doctor = await doctorRepository.save({
        name: name,
        birth_date: birth_date,
        email: email,
        password: hashSync(password, 10),
        cpf: cpf,
        crm: crm
    });

    return doctor
}

export default createDoctorService;