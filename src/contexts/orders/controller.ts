import { FastifyReply, FastifyRequest } from "fastify";
import { Order } from "@prisma/client";
import { success } from "../../helpers/successResponse";
import { OrderService } from "./services";

export class OrderController {

  private orderService: OrderService;
  
  constructor() {
    this.orderService = new OrderService();
  }

  public async findAllOrders (request: FastifyRequest, reply: FastifyReply): Promise<Order[]> {
    const orders = await this.orderService.findAllOrders();
    return orders;
  }

  public async findOrderById (request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as any;
    const orderId = parseInt(id, 10);

    const selectedOrder = await this.orderService.findById(orderId);

    if(!selectedOrder)
      return {
        data: null,
        errors: {
          message: `Not user with provided ID: ${orderId}`
        }
      }
      
    return selectedOrder;
  }

  public async createOrder (request: FastifyRequest, reply: FastifyReply) {
    const payload = request.body as any;
    const createdOrder = await this.orderService.createOrder(payload);

    if(!createdOrder)
      return success({
        data: null,
        errors: {
          message: `Could not create user`
        }}
      )
      
    return success(createdOrder);
  }

}
