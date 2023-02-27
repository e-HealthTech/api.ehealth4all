import { NextFunction, Request, Response } from "express";

// Returns a function that will catch any errors thrown by the passed in function
export default (fn: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
