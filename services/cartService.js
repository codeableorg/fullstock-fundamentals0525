import * as cartRepository from "../repositories/cartRepository.js";
import * as productRepository from "../repositories/productRepository.js";

export async function getCartData(sessionId) {
  //paso 1: buscamos si el carrito existe
  const cart = await cartRepository.findOrCreateCart(sessionId);

  return populateCartItems(cart);
}

async function populateCartItems(cart) {
  if (!cart.items || cart.items.length === 0) {
    return {
      ...cart,
      items: [],
      totalAmount: 0,
    };
  }
  const productIds = cart.items.map((item) => item.productId);
  const allProducts = await productRepository.findAll();

  // Filtrar productos  que si estan en el carrito
  const cartProducts = allProducts.filter((product) =>
    productIds.includes(product.id)
  );

  // Create enriched items with product details
  const enrichedItems = cart.items.map((item) => {
    const product = cartProducts.find((p) => p.id === item.productId);
    return {
      ...item,
      product,
      subtotal: product.price * item.quantity,
    };
  });

  // Calculate total amount
  const totalAmount = enrichedItems.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  return {
    ...cart,
    items: enrichedItems,
    totalAmount,
  };
}
