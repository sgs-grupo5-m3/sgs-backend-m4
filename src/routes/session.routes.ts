import { Router } from "express";
import { createSessionController } from "../controllers/session/createSession.controller";

const router = Router();

const sessionRouter = () => {
  router.post("", createSessionController);

  return router;
};

export default sessionRouter;
