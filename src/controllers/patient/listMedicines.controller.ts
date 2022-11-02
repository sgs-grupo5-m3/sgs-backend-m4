import { Request, Response } from "express";
import listMedicineService from "../../services/patient/listMedicine.service";

const listMedicinesController = async (req: Request, res: Response) => {
  const cpf = req.body;
  const medicines = await listMedicineService(cpf);

  return res.json(medicines);
};

export default listMedicinesController;
