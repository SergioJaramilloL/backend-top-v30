import { PrismaClient } from '@prisma/client';

import { hashPassword } from '../../auth/utils/bcrypt';
import { User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.user.findMany({
    select: {
      id: false,
      firstName: true,
      lastName: true,
      email: true,
      avatar: true,
      //
      roles:{
        select: {
          Role: {
            select: {
              id: true,
              name: true,
            }
          }
        }
      }
    }
  });
  return users;
}

export async function createUser(input: User) {

  const hashedPassword = await hashPassword(input.password);

  const data = {
    ...input,
    password: hashedPassword
  }

  const user = await prisma.user.create({
    data
  });

  return user;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      roles: {
        select: {
          Role: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });

  return user;
}

export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(data: User) {
  const user = await prisma.user.update({
    where: {
      id: data.id,
    },
    data,
  });

  return user;
}
