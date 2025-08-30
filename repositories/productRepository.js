import { readDB } from "../data/db.js";

// Nota: Esa funcion nos va a devolver la lista [] de productos por tipod e categoria
export async function findAllProductsByCategoryId(categoryId) {
  try {
    const db = await readDB();

    return db.products.filter((product) => product.categoryId === categoryId);
  } catch (error) {
    throw new Error(
      `Failed to retrieve products for category ${categoryId}`,
      error
    );
  }
}