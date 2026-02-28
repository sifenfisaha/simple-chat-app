import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use(
  morgan(':method :url :status :response-time ms - :res[content-length]')
);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: '@repo/server',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/hello', (_req, res) => {
  res.json({
    message: 'Hello from Express API',
  });
});

export default app;
