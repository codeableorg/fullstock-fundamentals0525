import { readDB, writeDB } from "../data/db.js";
import { v4 as uuidv4 } from "uuid";

export async function createOrder(orderData) {
  try {
    const db = await readDB();
    // Generate a new order ID;
    const orderId = uuidv4();
    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newOrder = {
      id: orderId,
      orderNumber,
      ...orderData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log("Desde repository: ", newOrder);

    db.orders.push(newOrder);
    await writeDB(db);

    return newOrder;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
}

export async function getOrderByOrderNumber(orderNumber) {
  try {
    const db = await readDB();
    return db.orders.find((order) => order.orderNumber === orderNumber);
  } catch (error) {
    throw new Error(`Failed to get order by number: ${error.message}`);
  }
}