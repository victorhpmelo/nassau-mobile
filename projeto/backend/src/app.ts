import express from 'express';

import { passwordRoutes } from './routes/routes';
import { errorHandler } from './middlewares/errorHandler';
import { PrismaClient } from './database/generated/prisma';

export const prisma = new PrismaClient();

const app = express();


app.use(express.json());

app.use('/password',passwordRoutes());

app.use(errorHandler);

export default app;
