import { Request, Response, NextFunction } from "express";

const authIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.userIsDoctor === false) {
    return res.status(403).json({ message: "Missing doctor permissions" });
  }

  return next();
};

export default authIsAdmMiddleware;
