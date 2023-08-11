import bcrypt from 'bcrypt';

/**
 * Hash password
 * @param password Password to hash 
 * @param factor Number of rounds to hash the password, default is 10
 * @returns Promise<string> Hashed password
 */
export const hashPassword = async (password: string, factor?: number) => {
  // 1. salt
  const salt = await bcrypt.genSalt(factor)

  // 2. hash
  return await bcrypt.hash(password, salt)
}

/**
 * compare password
 * @param password Password to compare
 * @param hashedPassword Password hashed to compare
 * @returns Promise<boolean> True if password match, false otherwise
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
}