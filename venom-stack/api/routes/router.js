import userRoutes from './user-routes'
import transactionRoutes from './transaction-routes'

const endPoint = '/api'

export function registeredRoutes (app) {
  app.use(endPoint, userRoutes)
  app.use(endPoint, transactionRoutes)
}
