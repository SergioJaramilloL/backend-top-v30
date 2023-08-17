import jwt from 'jsonwebtoken';

import { PayloadType } from './auth.types';

const SECRET = process.env.JWT_SECRET as string

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, SECRET) as PayloadType

  return decoded
}

export const signToken = (payload: PayloadType) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: `${1000 * 60 * 60 * 24}` })

  return token
}