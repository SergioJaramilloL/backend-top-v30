import { roleSeeder } from "../roles/role.seeder";
import { userSeeder } from "../user/user.seeder";

export const userRoleSeeder = [
  {
    roleId: roleSeeder[0].id,
    userId: userSeeder[0].id,
  },
  {
    roleId: roleSeeder[1].id,
    userId: userSeeder[1].id,
  },
  {
    roleId: roleSeeder[2].id,
    userId: userSeeder[1].id,
  },
]