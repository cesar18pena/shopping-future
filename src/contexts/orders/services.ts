import { Order } from "@prisma/client";
import { OrderCreate } from './interfaces';
import { prisma } from "../../server";

export class OrderService {
  
  constructor() {}

  public async findAllOrders (): Promise<Order[]> {
    const allOrders = await prisma.order.findMany();
    return allOrders;
  }

  public async findById(id: number): Promise<Order | null> {
    const selectedOrder = await prisma.order.findUnique({
      where: {
        id,
      },
    }); 

    return selectedOrder;
  }

  public async createOrder(payload: OrderCreate): Promise<Order> {
    const createdOrder = await prisma.order.create({ data: payload });
    return createdOrder;
  }

}
