import { Request, Response } from "express";
import createMedicineService from "../../services/patient/createMedicine.service";

const createMedicineController = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const userId = req.user.id;

  const medicine = await createMedicineService({ name, description, userId });

  delete medicine.patient

  return res.status(201).json({
    message: "Medicine Created!",
    medicine,
  });
};

export default createMedicineController;
