import { Router } from "express";

import authTokenMiddleware from "../middlewares/authToken.middleware";

import listProfileController from "../controllers/profile/listProfile.controller";

const router = Router();

const profileRouter = () => {
  router.get("", authTokenMiddleware, listProfileController);

  return router;
};

export default profileRouter;
