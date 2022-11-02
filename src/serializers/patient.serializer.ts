import * as yup from "yup";

import { SchemaOf } from "yup";
import {
  IExamsSerilizer,
  IMedicinesSerilizer,
  IPatientRequest,
} from "../interfaces/patient";

export const patientCreateSchema: SchemaOf<IPatientRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    birth_date: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    cpf: yup.string().required(),
  });

export const medicinesCreateSchema: SchemaOf<IMedicinesSerilizer> = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().notRequired(),
  });

export const examsCreateSchema: SchemaOf<IExamsSerilizer> = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  results_exams: yup.string().required(),
});
