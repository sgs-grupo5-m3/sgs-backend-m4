import { Request, Response } from "express"
import { IAllergyRequest } from "../../interfaces/patient"
import updateAllergyService from "../../services/patient/updatedAllergy.service"

const updateAllergyController = async (req: Request, res: Response) => {
   
  const updateAllergy: IAllergyRequest = req.body;
  const id:string = req.params.id;
  const userId: string = req.user.id
  const allergy = await updateAllergyService( updateAllergy, id, userId );
          
  return res.status(200).json({
    message: "Allergy Update!",
    allergy,
});
  }

export default updateAllergyController;