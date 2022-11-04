import { Request, Response, NextFunction } from "express";

const authIsPatientMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isDoctor !== false) {
    return res.status(403).json({ message: "Only Patient" });
  }

  return next();
};

export default authIsPatientMiddleware;
