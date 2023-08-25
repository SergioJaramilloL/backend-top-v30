import { signToken } from "../auth.service"

export const createAuthResponse = (input: any) => {
  const payload = {
    id: input.id,
    email: input.email,
  }
  
  const token = signToken(payload)

  const profile = {
    fullName: `${input.firstName} ${input.lastName}`,
    email: input.email,
    avatar: input.avatar,
    roles: input.roles.map(({ Role }: any) => ({
      id: Role.id,
      name: Role.name
    }))
  }

  return { token, profile }
}