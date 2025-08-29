import * as categoryRepository from "../repositories/categoryRepository.js";

export async function getCategory(categoryType) {
  const category = await categoryRepository.findByCategory(categoryType);

  if (!category) {
    throw new Error(`category type ${categoryType} not found!`);
  }
  return category;
}

export async function getProductsByCategoryId(categoryId) {
  const products = await categoryRepository.findAllByCategoryId(categoryId);

  return products;
}
