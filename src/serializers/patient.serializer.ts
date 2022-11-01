import * as yup from "yup";

import { SchemaOf } from "yup";
import { IPatientCreate } from "../interfaces/patient/patient";

export const patientCreateSchema: SchemaOf<IPatientCreate> = yup
  .object()
  .shape({
    name: yup.string().required(),
    birth_date: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    cpf: yup.string().required(),
  });
