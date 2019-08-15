import userRoutes from './user-routes'
import authRoutes from './auth-routes'

export function registeredRoutes(app) {
    app.use('/api', userRoutes);
    app.use('/api', authRoutes);
}