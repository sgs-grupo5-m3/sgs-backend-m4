import { Request, Response } from "express"
import { IDiseaseRequest } from "../../interfaces/patient"
import updateDiseaseService from "../../services/patient/updatedDisease.service";

const updateDiseaseController = async (req: Request, res: Response) => {
   
        const updateDisease: IDiseaseRequest = req.body;
        const id:string = req.params.id;
        const disease = await updateDiseaseService( updateDisease, id );
         
        return res.status(200).json({
                message: "Doença atualizada!",
                disease,
              });
}

export default updateDiseaseController;