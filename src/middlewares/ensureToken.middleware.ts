import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid Token." });
      }
      req.userId = decoded.sub;
      req.userIsDoctor = decoded.isMedical;

      return next();
    }
  );
};

export default authTokenMiddleware;
