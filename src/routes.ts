import { Application } from 'express';
import { expressMiddleware } from '@apollo/server/express4'

import healthcheckRouter from './api/healthcheck';
import productRouter from './api/product';
import reviewRouter from './api/review';
import userRouter from './api/user';
import authLocalRouter from './auth/local';
import checkoutRouter from './api/checkout'

const routes = (app: Application, graphqlServer: any) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/users', userRouter)
  app.use('/api/products', productRouter)
  app.use('/api/reviews', reviewRouter)
  app.use('/api/checkout', checkoutRouter)

  //Auth
  app.use('/auth/local', authLocalRouter)

  // GraphQL
  app.use('/graphql', expressMiddleware(graphqlServer))
  
}

export default routes