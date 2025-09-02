import { readDB, writeDB , getNextId} from "../data/db.js";

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
