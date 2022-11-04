import { Request, Response } from "express";
import { IMedicinesRequest } from "../../interfaces/patient";
import updateMedicineService from "../../services/patient/updatedMedicine.service";

const updateMedicineController = async (req: Request, res: Response) => {
  const updateMedicine: IMedicinesRequest = req.body;
  const id: string = req.params.id;
  const userId: string = req.user.id;
  
  const medicine = await updateMedicineService(updateMedicine, id, userId);

  return res.status(200).json({
    message: "Medicine Updated!",
    medicine,
  });
};

export default updateMedicineController;
