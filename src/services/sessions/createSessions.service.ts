// import { AppDataSource } from "../../data-source"
// import { Patient } from "../../entities/patient.entity"
// import { Doctor } from "../../entities/doctor.entity"
// import { IUserLogin } from "../../interfaces/user"
// import { compare } from "bcrypt"
// import jwt from "jsonwebtoken"
// import "dotenv/config"

// const createSessionService = async ({email, password}:IUserLogin): Promise<object> => {
//     const userRepository = AppDataSource.getRepository(Patient)
//     const patient = await userRepository.findOneBy({
//         email: email 
//     })
//     if(!patient){
//         throw new Error("Invalid user or pasword")
//     }

//     const passwordMatch = await compare(password, patient.password)

//     if(!passwordMatch){
//         throw new Error("Invalid user or pasword")
//     }

//     const createdToken = jwt.sign({
//         isDoctor: patient.isDoctor
//         },
//         process.env.SECRET_KEY as string,
//         {
//             expiresIn: '24h'
//         }
//     )
//     return { 
//              id: 
//              token: createdToken
//            }
     
// }

// export default createSessionService