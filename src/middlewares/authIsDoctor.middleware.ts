import { Response, NextFunction, Request } from "express";

const authIsDoctorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isDoctor === false) {
    return res.status(403).json({ message: "Missing doctor permissions" });
  }

  return next();
};

export default authIsDoctorMiddleware;
