import * as yup from "yup";

import { SchemaOf } from "yup";
import { ISession } from "../interfaces/session/session";

export const sessionCreateSchema: SchemaOf<ISession> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
