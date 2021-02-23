import supertest from 'supertest';
import express from 'express';
import { health } from '.';

describe('Health', () => {
  const app = express();
  app.use(health);

  it('responds with rocket emoji', async () => {
    const res = await supertest(app).get('/').expect(200);
    expect(res.text).toContain('🚀');
  });
});
