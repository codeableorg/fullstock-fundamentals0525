import * as productsRepository from "../repositories/productRepository.js"


export async function getProductsByCategoryId(categoryId) {
  const products = await productsRepository.findAllProductsByCategoryId(categoryId);

  return products;
}

export async function getProductbyId(id){
  const productData = await productsRepository.getProductById(id);

  return productData; 
}
