import { User } from "../api/user/user.types"

export const welcomeEmail = (user: User) => {

  type Styles = {
    container: string,
    title: string
  }

  const styles: Styles = {
    container: `
      background-color: #f5f5f5;
      border: 1px solid #e0e0e0;
    `,
    title: `
      font-size: 2rem;
      color: #325AD8 ;
    `
  }

  const email = {
    from: 'MakeItReal<admin@makeitreal.camp>',
    to: user.email,
    subject: 'Welcome to Make it Real Camp',
    html: `
      <div style='${styles.container}'>
        <h1 style='${styles.title}'>Bienvenido ${user.firstName} ${user.lastName} a Make It Real</h1>
        <p>Gracias por unirte a nuestra App</p>
      </div>
    `,
    text: `Bienvenido a Make it Real Camp`,
    attachments: [
      {
        filename: 'logo.png',
        path: 'src/assets/logo.png',
      }
    ]
  }

  return email
}