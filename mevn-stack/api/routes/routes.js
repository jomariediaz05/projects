import taskRoutes from './tasks-routes';
import authRoutes from './auth-routes';
import registerRoutes from './register-routes';
import userRoutes from './user-routes';

const urlEndPoint = '/api';

export function registeredRoutes(app) {
    app.use(urlEndPoint, taskRoutes);
    app.use(urlEndPoint, authRoutes);
    app.use(urlEndPoint, registerRoutes);
    app.use(urlEndPoint, userRoutes);
}