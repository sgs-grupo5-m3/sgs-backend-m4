import * as yup from "yup";

import { SchemaOf } from "yup";
import {
  IAllergySerializer,
  IDiseaseSerializer,
  IExamsSerilizer,
  IMedicinesSerializer,
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

export const medicinesCreateSchema: SchemaOf<IMedicinesSerializer> = yup
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

export const allergiesCreateSchema: SchemaOf<IAllergySerializer> = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().notRequired(),
  });

export const diseasesCreateSchema: SchemaOf<IDiseaseSerializer> = yup
  .object()
  .shape({
    name: yup.string().required(),
    symptoms: yup.string().notRequired(),
  });
