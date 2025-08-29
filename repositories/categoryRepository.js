import { readDB } from "../data/db.js";

export async function findByCategory(categoryType) {
  try {
    const db = await readDB();

    return db.categories.find((category) => category.slug === categoryType);
  } catch (error) {
    console.log(error)
  }
}
