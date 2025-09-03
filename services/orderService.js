import * as cartRepository from "../repositories/cartRepository.js";
import * as orderRepository from "../repositories/orderRepository.js";
import * as cartService from "./cartService.js";

export async function createOrder(orderData, cartId) {
  // debemos saber comprobar que ese car Id se valido
  const {
    email,
    firstName,
    lastName,
    company,
    address,
    city,
    country,
    region,
    zipCode,
    phone,
  } = orderData;

  // necesitamos buscar el carrito en la DB
  const cart = await cartService.getCart(cartId);

  console.log("Cart found for order creation: ", cart);
  if (!cart || !cart.items || cart.items.length === 0) {
    throw new Error("The cart is invalid");
  }

  
  // Es enrriquecer/colocar mas data, para la creaciond e una orden de compra
  const orderItems = cart.items.map((item) => {
    return {
      productId: item.product.id,
      name: item.product.name,
      price: item.product.price,
      imageUrl: item.product.imgSrc,
      quantity: item.quantity,
      subtotal: item.subtotal,
    };
  });

  // Calculate order total (without tax or shipping)
  const total = cart.totalAmount;

  const ordersDetail = {
    email,
    cartId,
    shipping: {
      firstName,
      lastName,
      company: company || null,
      phone: phone || null,
      address,
      city,
      region,
      zipCode,
      country,
    },
    items: orderItems,
    total,
  };

  console.log("Order details prepared for creation: ", ordersDetail);

  // vamos a crear la nueva order
  const newOrder = await orderRepository.createOrder(ordersDetail);

  await cartRepository.clearCart(cartId);

  console.log("New order created successfully: ", newOrder);


  return newOrder;
}

export async function getOrderByOrderNumber(orderNumber, sessionId) {
  const order = await orderRepository.getOrderByOrderNumber(orderNumber);

  if (!order) {
    throw new Error(`Order ${orderNumber} not found`);
  }

  if (order.cartId !== sessionId) {
    throw new Error("You are not authorized to view this order");
  }

  return order;
}
