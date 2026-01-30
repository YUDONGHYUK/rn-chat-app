import express from 'express';

import authRoutes from './routes/auth-routes';

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req.body in your route handlers.

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'server is running' });
});

app.use('/api/auth', authRoutes);

export default app;
