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
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid Token." });
      }
        req.user = {
          id: decoded.sub,
          isDoctor: decoded.isDoctor
        }

      
      return next();
    }
  );
};

export default authTokenMiddleware;
