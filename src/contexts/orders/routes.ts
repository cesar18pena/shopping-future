import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from '../../server';

export const routes = (app: FastifyInstance, options: FastifyPluginOptions): void => {

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const allUsers = await prisma.user.findMany({
      take: 1,
      select: {
        id: true,
        name: true,
        profile: {
          select: {
            id: true,
            bio: true,
          }
        }
      }
    })

    reply.send({ users: allUsers });
  });

  app.get('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  app.post('/', (request: FastifyRequest, reply: FastifyReply) => {

  });


  app.put('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  app.delete('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

}
