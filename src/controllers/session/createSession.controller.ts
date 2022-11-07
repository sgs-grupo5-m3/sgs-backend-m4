import { ISession } from "../../interfaces/session";
import { Request, Response } from "express";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const { email, password }: ISession = req.validatedBody as ISession;
  const token = await createSessionService({ email, password });
  return res.status(200).json({ token });
};

export { createSessionController };
