import dotenv from 'dotenv';
import { app } from './app';
import { env } from './env';

dotenv.config();

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Listening at http://localhost:${env.port}`);
});
