import { Request, Response } from "express";
import { deflate } from "zlib";
import listMedicine from "../../services/medicines/listMedicine.service";

const listMedicinesController = async (req: Request, res: Response) => {
  const cpf = req.body;
  const medicines = await listMedicine(cpf);

  return res.json(medicines);
};

export default listMedicinesController;
