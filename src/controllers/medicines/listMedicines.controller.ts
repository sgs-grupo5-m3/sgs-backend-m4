import { Request, Response } from "express";
import { deflate } from "zlib";
import listMedicine from "../../services/medicines/listMedicine.service";

const listMedicinesController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const medicines = await listMedicine(id);

  return res.json(medicines);
};

export default listMedicinesController;
