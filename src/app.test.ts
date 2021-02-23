import supertest from 'supertest';
import { app } from './app';

describe('App', () => {
  it('responds with wave', async () => {
    await supertest(app).get('/').expect(200, '👋');
  });
});
