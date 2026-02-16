import express from 'express';
import { clerkMiddleware } from '@clerk/express';

import authRoutes from './routes/auth-routes';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req.body in your route handlers.
app.use(clerkMiddleware());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'server is running' });
});

app.use('/api/auth', authRoutes);

// error handler must come after all the routes and other middleware so they can catch errors passed with next(error) or thrown inside async handlers
app.use(errorHandler);

export default app;
