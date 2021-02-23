import express from 'express';

export const health = express.Router();

health.get('/', (_req, res) => {
  res.send('All systems nominal 🚀');
});
