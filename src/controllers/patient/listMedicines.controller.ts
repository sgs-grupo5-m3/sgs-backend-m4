import { Request, Response } from "express";
import listMedicineService from "../../services/patient/listMedicine.service";

const listMedicinesController = async (req: Request, res: Response) => {
  const id = req.user.id;

  const medicines = await listMedicineService(id);

  return res.status(200).json({ medicines });
};

export default listMedicinesController;
