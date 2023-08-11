import { Application } from 'express';

import healthcheckRouter from './api/healthcheck';
import productRouter from './api/product';
import reviewRouter from './api/review';
import userRouter from './api/user';
import authLocalRouter from './auth/local';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/users', userRouter)
  app.use('/api/products', productRouter)
  app.use('/api/reviews', reviewRouter)

  //Auth
  app.use('/auth/local', authLocalRouter)
}

export default routes