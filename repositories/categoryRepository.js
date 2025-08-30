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
