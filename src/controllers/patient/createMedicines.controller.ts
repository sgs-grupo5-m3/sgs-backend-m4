import { Request, Response } from "express";
import createMedicineService from "../../services/patient/createMedicine.service";

const createMedicineController = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const patient = req.user.id;

  const medici = await createMedicineService({ name, description, patient });

  return res.status(201).json({
    message: "Medicamento Cadastrado !",
    medici,
  });
};

export default createMedicineController;
