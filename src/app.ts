import express from 'express'

import configExpress from './config/express'
import routes from './routes'


const app = express()
const port = process.env.PORT || 8080

//Setup Express
configExpress(app)

//Setup Routes
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
