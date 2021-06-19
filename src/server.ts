import fastify from "fastify";
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';

import { routes as orderRoutes } from './contexts/orders/routes';

const server = fastify();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

server.register(orderRoutes, {
  prefix: '/api/orders'
}).then(() => console.log('is it running'));

export {
  server,
  prisma
}



