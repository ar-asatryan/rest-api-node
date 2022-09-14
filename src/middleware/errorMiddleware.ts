import { Request, Response } from 'express';

export const errorHandler = (req: Request, res: Response) => {
  const err = new Error('Request Not Found...');
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
