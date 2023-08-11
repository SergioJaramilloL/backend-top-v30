import { Request, Response } from 'express'

export const healchecktHandler = (_: Request, res: Response) => {
  res.status(200).json({ message: 'OK', uptime: process.uptime() })
}