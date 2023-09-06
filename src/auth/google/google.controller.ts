import { createUser } from "../../api/user/user.service";

const handleGoogleLogin = async (req, res ) => {
  const { given_name, family_name, email, picture } = req.body;

  const newUser = {
    firstName: given_name,
    lastName: family_name,
    avatar: picture,
    email
  }

  const response = createUser(input)


}