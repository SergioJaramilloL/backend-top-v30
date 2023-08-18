import express from 'express'

import configExpress from './config/express'
import routes from './routes'

import { formData } from './middlewares/formData'


const app = express()
const port = process.env.PORT || 8080

//Setup Express
configExpress(app)

//Setup Routes
routes(app)

app.post('/test-formdata', formData, (req, res) => {
  console.log('BODY', req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
