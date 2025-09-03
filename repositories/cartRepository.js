import { readDB, writeDB, getNextId } from "../data/db.js";

export async function findOrCreateCart(sessionId) {
  if (!sessionId) {
    throw new Error("Session ID es requerido");
  }
  try {
    const db = await readDB();

    let cart = db.carts.find((cart) => cart.sessionId === sessionId);

    if (!cart) {
      cart = {
        id: getNextId(db.carts),
        sessionId,
        items: [],
      };

      db.carts.push(cart);
      await writeDB(db);
    }

    return cart;
  } catch (error) {
    throw new Error("Failed creating/finding a cart");
  }
}

export async function updateCartItems(cartId, cartProducts) {
  try {
    const db = await readDB();

    const index = db.carts.findIndex((cart) => cart.id === cartId);

    if (index !== -1) {
      db.carts[index].items = cartProducts;
      await writeDB(db);
      return db.carts[index];
    }

    throw new Error(`Cart with ID ${cartId} not found`);
  } catch (error) {
    throw new Error(
      `Failed  to update cart items | cardID : ${cartId} cartItems: ${cartProducts}`
    );
  }
}

export async function clearCart(cartId) {
  try {
    const db = await readDB();
    const cart = db.carts.find((cart) => cart.sessionId === cartId);

    if (cart) {
      cart.items = [];
      await writeDB(db);
    }
  } catch (error) {
    console.error("Error al limpiar el carrito:", error);
    throw error;
  }
}

