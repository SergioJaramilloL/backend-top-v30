import { User } from "../api/user/user.types"

export const welcomeEmailSG = (user: User) => {

  const emailData = {
    from: 'No reply <sergio.jaramillo@makeitreal.camp>',
    to: user.email,
    subject: 'Welcome to the app',
    templateId: 'd-20f39044f5ad4363a806030658b00ce9',
    dynamic_template_data: {
      firstName: user.firstName,
      lastName: user.lastName,
      redirectUrl: `http://localhost:5173/verify-account/${user.resetToken}`
    }
  }

  return emailData
}

