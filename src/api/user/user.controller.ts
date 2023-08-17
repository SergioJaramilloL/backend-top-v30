import { Request, Response } from 'express';

import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
} from './user.service';
import { AuthRequest } from '../../auth/auth.types';
import { User, RequestUserData, UserCredential } from './user.types';
import { createUserRole } from '../userRole/userRole.service';
import { UserRole } from '../userRole/userRole.types';

export async function getAllUserHandler(req: Request, res: Response) {
  try {

    const users = await getAllUser();
    
    return res.status(202).json({ message: 'users has been found successfully', users });
  } catch({ message }: any) {

    res.status(400).json({ message })
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {

    const { firstName, lastName, email, password, roleId }: RequestUserData = req.body;
    
    const newUser: UserCredential = {
      firstName,
      lastName,
      email,
      password,
    }
    const user: User = await createUser(newUser);
    
    const dataRelation: UserRole = {
      userId: user.id,
      roleId
    }
    await createUserRole(dataRelation)

    const profile = {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      avatar: user.avatar,
    }
    
    res.status(201).json({ message: 'user has been created successfully', profile });
  } catch ({ message }: any) {

    res.status(400).json({ message })
  }
}


export async function getUserHandler(req: AuthRequest, res: Response) {
  const { id } = req.user as User;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(user);
}

export async function deleteUserHandler(req: AuthRequest, res: Response) {
  const { id } = req.user as User

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  await deleteUser(id);

  return res.json(user);
}

export async function updateUserHandler(req: Request, res: Response) {}
