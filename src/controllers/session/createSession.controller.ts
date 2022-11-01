import { ISession } from './../../interfaces/session/session';
import { Request, Response } from "express";
import createSessionService from '../../services/session/createSession.service';

const createSessionController = async (req: Request, res: Response) => {
  const data: ISession = req.body;
  const token = await createSessionService(data);
  return res.json({ token });
};

export { createSessionController };
