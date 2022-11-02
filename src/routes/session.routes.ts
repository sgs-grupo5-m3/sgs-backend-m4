import { Router } from "express";
import { createSessionController } from "../controllers/session/createSession.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { sessionCreateSchema } from "../serializers";

const router = Router();

const sessionRouter = () => {
  router.post(
    "",
    validateRequest(sessionCreateSchema),
    createSessionController
  );

  return router;
};

export default sessionRouter;
