import express from 'express';
import { clerkMiddleware } from '@clerk/express';

import authRoutes from './routes/auth-routes';
import chatRoutes from './routes/chat-routes';
import messageRoutes from './routes/message-routes';
import userRoutes from './routes/user-routes';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req.body in your route handlers.
app.use(clerkMiddleware());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'server is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// error handler must come after all the routes and other middleware so they can catch errors passed with next(error) or thrown inside async handlers
app.use(errorHandler);

export default app;
