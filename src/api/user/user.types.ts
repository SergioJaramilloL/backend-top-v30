import { User as UserModel } from '@prisma/client';

export type User = UserModel;

// PICK -> indicamos que campos queremos mostrar
// OMIT -> indicamos que campos queremos omitir

export type RequestUserData = Pick<UserModel, 'firstName' | 'lastName' | 'email' | 'password'> & { roleId: string };

export type UserCredential = Omit<RequestUserData, 'roleId'>;