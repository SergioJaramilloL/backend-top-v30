import { Router } from 'express'

import { loginHandler, activeHandler } from './local.controller'

const route = Router()

//login -> POST /auth/local/login
route.post('/login', loginHandler)

//change password
//reset password
//active account
route.get('/active-account/:token', activeHandler)
//louout

export default route