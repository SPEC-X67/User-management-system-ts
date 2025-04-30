import { Request, Response, NextFunction } from "express";

declare module "express-session" {
  interface SessionData {
    verified?: boolean;
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session?.verified) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized. Please log in." });
  }
};
