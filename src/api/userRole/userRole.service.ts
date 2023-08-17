import { PrismaClient } from "@prisma/client";

import { UserRole } from "./userRole.types";

const prisma = new PrismaClient();


export const createUserRole = async (input: UserRole) => {
 const relation = await prisma.userRole.create({
    data: {
      userId: input.userId,
      roleId: input.roleId
    }
  })

  return relation
}