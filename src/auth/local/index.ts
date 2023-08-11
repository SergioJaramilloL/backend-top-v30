import { Router } from 'express'

import { loginHandler } from './local.controller'

const route = Router()

//login -> POST /auth/local/login
route.post('/login', loginHandler)

//change password
//reset password
//active account
//louout

export default route