import express from 'express'

import configExpress from './config/express'
import routes from './routes'

import { formData } from './middlewares/formData'
import { clientRedis } from './config/redis'
import { graphqlConfig } from './config/graphql'


const app = express()
const port = process.env.PORT || 8080

//Setup Express
configExpress(app)

//Setup Routes


app.post('/test-formdata', formData, (req, res) => {
  console.log('BODY', req.body)
  res.json(req.body)
})

app.listen(port, async () => {
  // Redis running
  clientRedis.on('error', (err) => console.log('Redis client error', err))
  await clientRedis.connect();
  // GraphQL running
  const graphqlServer = await graphqlConfig(app)
  await routes(app, graphqlServer)

  console.log(`Example app listening on port ${port}`)
})
