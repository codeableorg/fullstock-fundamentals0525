import * as categoryRepository from "../repositories/categoryRepository.js";

export async function getProductsByCategory(categoryType) {
  const categoryData = await categoryRepository.findByCategory(categoryType);

  if (!categoryData) {
    throw new Error(`category type ${categoryType} not found!`);
  }
  return categoryData;
}
