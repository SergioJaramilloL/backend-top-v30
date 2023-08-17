import { hashPasswordSync } from "../../auth/utils/bcrypt"
import { User as UserModel } from "./user.types"

type User = Omit<UserModel, 'createdAt' | 'updatedAt'>

export const userSeeder: User[] = [
  {
    id: 'llf829qw000090mu95flje03',
    email: 'jhondoe@test.com',
    firstName: 'Jhon',
    lastName: 'Doe',
    password: hashPasswordSync('1234'),
    isActive: true,
    avatar: 'https://picsum.photos/200',
  },
  {
    id: 'llf829qw000090mu95flje04',
    email: 'jaenndoe@test.com',
    firstName: 'Jaen',
    lastName: 'Doe',
    password: hashPasswordSync('1234'),
    isActive: false,
    avatar: 'https://picsum.photos/200',
  },
]