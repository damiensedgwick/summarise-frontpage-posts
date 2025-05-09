import { Request, Response } from "express";

export const healthHandler = {
  check: (_req: Request, res: Response) => {
    // TODO: add more checks here such as database connection check etc
    return res.status(200).json({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  },
};
