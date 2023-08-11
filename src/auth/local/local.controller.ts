import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { getUserByEmail } from '../../api/user/user.service';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth.service'; 

export async function loginHandler(req: Request, res: Response){
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if(!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Compare password
    const isMatch = await comparePassword(password, user.password)
    
    if(!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // JWT
    const payload = {
      id: user.id,
      email: user.email,
    }
    const token = signToken(payload)

    const profile = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
    }

    return res.status(200).json({ token, profile })

  } catch(error) {}
}