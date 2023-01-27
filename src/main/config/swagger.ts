import { serve, setup } from 'swagger-ui-express'
import swaggerConfig from '../docs'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/documentation', serve, setup(swaggerConfig))
}