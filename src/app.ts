import express from 'express'

import configExpress from './config/express'
import routes from './routes'

import { formData } from './middlewares/formData'
import { clientRedis } from './config/redis'


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

app.listen(port, async () => {
  clientRedis.on('error', (err) => console.log('Redis client error', err))
  await clientRedis.connect();
  console.log(`Example app listening on port ${port}`)
})
