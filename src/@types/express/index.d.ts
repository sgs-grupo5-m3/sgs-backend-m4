import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      userId: string
      userIsDoctor: boolean
    }
  }
}
