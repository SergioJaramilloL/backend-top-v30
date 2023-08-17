import { UserRole as UserRoleModel } from "@prisma/client";

export type UserRole = Omit<UserRoleModel, 'id'>;