import * as productsRepository from "../repositories/productRepository.js"


export async function getProductsByCategoryId(categoryId) {
  const products = await productsRepository.findAllProductsByCategoryId(categoryId);

  return products;
}
