import * as yup from "yup";

import { SchemaOf } from "yup";
import { IDoctorRequest } from "../interfaces/doctor";

export const doctorCreateSchema: SchemaOf<IDoctorRequest> = yup.object().shape({
  name: yup.string().required(),
  birth_date: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  cpf: yup.string().required(),
  crm: yup.string().required(),
});
