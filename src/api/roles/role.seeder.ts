import { Role as RoleModel } from "@prisma/client";

type Role = Pick<RoleModel, 'id' | 'name'>

export const roleSeeder: Role[] = [
  { 
    id: 'cllf829qw000090mu95flje00',
    name: "ADMIN" 
  },
  { 
    id: 'cllf829qw000090mu95flje01',
    name: "USER" 
  },
  { 
    id: 'cllf829qw000090mu95flje02',
    name: "SUPERADMIN"
  }     
];