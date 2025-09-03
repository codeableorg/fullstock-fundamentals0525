import * as cartRepository from "../repositories/cartRepository.js";
import * as productRepository from "../repositories/productRepository.js";

export async function getCartData(sessionId) {
  //paso 1: buscamos si el carrito existe
  const cart = await cartRepository.findOrCreateCart(sessionId);

  return populateCartItems(cart);
}


export async function getCart(sessionId) {
  const cart = await cartRepository.findOrCreateCart(sessionId);
  return populateCartItems(cart);
}

export async function addItemToCart(productId, sessioId) {
  if (!sessioId) {
    throw new Error("Session Id is required");
  }

  productId = parseInt(productId);

  // paso 1: buscar el product en BD
  const product = await productRepository.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  // paso 2: buscar/crear el varrito en la DB
  const cart = await cartRepository.findOrCreateCart(sessioId);

  // paso 3 : Verificar si el producto , ya existia previamente ne le carrito
  const isItemIntoCart = cart.items.findIndex((item) => item.id === productId);

  // si es diferente, quiere decir que este producto ya existia previamente en el carrito
  if (isItemIntoCart !== -1) {
    cart.items[isItemIntoCart].quantity += 1;
  } else {
    // paso 4: Actualizar  los item del carrito
    cart.items.push({ productId, quantity: 1 });
  }

  // paso 5: Guadra la data en db (actualizacion del carrito)
  await cartRepository.updateCartItems(cart.id, cart.items) 

  // paso 6: devolver data del carrito actulizado
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
