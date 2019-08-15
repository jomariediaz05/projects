/* eslint-disable import/prefer-default-export */

import taskRoutes from './api/task/task-routes';
import authRoutes from './api/auth/auth-routes';
import registerRoutes from './api/register/register-routes';
import userRoutes from './api/user/user-routes';

export function registeredRoutes(app) {
  app.use('/api', taskRoutes);
  app.use('/api', authRoutes);
  app.use('/api', registerRoutes);
  app.use('/api', userRoutes);
}
