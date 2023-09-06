import { Request, Response } from 'express';

import { 
  getUserByEmail, 
  getUserByResetToken,
  updateUser 
} from '../../api/user/user.service';
import { comparePassword } from '../utils/bcrypt';
import { createAuthResponse } from './local.service';

export async function loginHandler(req: Request, res: Response){
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if(!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Compare password
    const isMatch = await comparePassword(password, user.password as string)
    
    if(!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    const { token, profile } = createAuthResponse(user);
   
    return res.status(200).json({ token, profile})

  } catch(error) {}
}

export async function activeHandler(req: Request, res: Response){
  try {
    const { token: tokenParam } = req.params;
    const user = await getUserByResetToken(tokenParam);

    if(!user) {
      return res.status(404).json({ message: 'Invalid token'});
    }

    if(user.tokenExpires){
      if(Date.now() > user.tokenExpires.getTime()) {
        return res.status(400).json({ message: 'Token expired'});
      }
    }

    const data = {
      ...user,
      isActive: true,
      resetToken: null,
      tokenExpires: null
    }

    const currentUser = await updateUser(data);

    const { token, profile } = createAuthResponse(currentUser);


    res.status(200).json({ token, profile})
  } catch(error: any) {
    res.status(400).json({ message: error.message })
  }
}