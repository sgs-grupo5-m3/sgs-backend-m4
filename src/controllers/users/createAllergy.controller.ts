// import { Request, Response } from "express"
// import { IUserAllergy } from "../../interfaces/user"

// import a

// // import { handleError, AppError } from "../erros/AppErro"

// const createAllergyController = async (request: Request, response: Response)=>{
//     try {
//         const user:IUserRequest = request.body
//         const createdUser = await createUserService(user)
      
//         return response.status(201).json(instanceToPlain(createdUser))
//      } catch (error) {
//         if(error instanceof Error)
//         return response.status(400).json({
//             message: error.message
//         })
//     }
// }

// export { createAllergyController }