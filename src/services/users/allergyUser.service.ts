// import { AppDataSource } from "../../data-source"
// import { Patient } from "../../entities/patient.entity"
// import { IUserAllergy } from "../../interfaces/user"

// const createAllergyService = async ({name,description}: IUserAllergy): Promise<Patient[]> => {
//   const patientRepository = AppDataSource.getRepository(Patient)

//   const patient = await patientRepository.find()

//   if (name === undefined || describe === undefined) {
//     throw new Error("name or describe not exists")
//   }

// //   const allergy = patientRepository.create({
// //     name,
// //     description
// //   })
 
// //   return allergy
// }

// export default createAllergyService;