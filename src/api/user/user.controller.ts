import { Request, Response } from 'express';

import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
} from './user.service';
import { AuthRequest } from '../../auth/auth.types';
import { User } from './user.types';

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();

  return res.json(users);
}

export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  const user = await createUser(data);

  return res.json(user);
}

export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params;

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
