import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { success } from "../../helpers/successResponse";
import { OrderController } from './controller';

const orderController = new OrderController();

export const routes = (app: FastifyInstance, options: FastifyPluginOptions, done: any): void => {

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    orderController.findAllOrders(request, reply)
      .then(data => reply.send(success(data)))
      .catch(e => reply.status(500).send(e))
  });

  app.get('/:id', (request: FastifyRequest, reply: FastifyReply) => {
    orderController.findOrderById(request, reply)
      .then(data => reply.send(success(data)))
      .catch(e => reply.status(500).send(e))
  });

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    orderController.createOrder(request, reply)
    .then(data => reply.send(success(data)))
    .catch(e => reply.status(500).send(e))
  });

  app.put('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  app.delete('/:id', (request: FastifyRequest, reply: FastifyReply) => {

  });

  done();
}
