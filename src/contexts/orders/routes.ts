import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { Prisma } from "@prisma/client";
import { prisma } from '../../server';

type OrderCreate = Prisma.OrderCreateInput;

export const routes = (app: FastifyInstance, options: FastifyPluginOptions, done: any): void => {

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const allOrders = await prisma.order.findMany();
    reply.send(allOrders);
  });

  app.get('/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as any;
    const orderId = parseInt(id, 10);
    const selectedOrder = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    !selectedOrder ? reply.send({
        data: null,
        errors: {
          message: `Not user with provided ID: ${orderId}`
        }
    }) : null;

    reply.send({data: selectedOrder, errors: null});

  });

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const payload: OrderCreate = request.body as any;
    const createdOrder = await prisma.order.create({ data: payload });
    reply.send(createdOrder);
  });

  app.put('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  app.delete('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  done();
}
