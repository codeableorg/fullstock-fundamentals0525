import { readDB } from "../data/db.js";

// Esta funcion solo devuelve LA PRIMERA CATEGORIA que encuentra segun el category type
export async function findByCategory(categoryType) {
  try {
    const db = await readDB();

    return db.categories.find((category) => category.slug === categoryType);
  } catch (error) {
    console.log(error)
  }
}

// Nota: Esa funcion nos va a devolver la lista [] de productos por tipod e categoria
export async function findAllByCategoryId(categoryId) {
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