import * as categoryService from "../services/categoryService.js";
import * as productsService from "../services/productService.js";

export const getProductsByCategory = async (req, res) => {
  try {
    // paso 1: Obtener el valor del param de la URL, para saber si nos llego la ruta de : /polos o /tazas o /stickers
    const { categoryType } = req.params;

    // paso 2: Obtener una categoria
    const category = await categoryService.getCategory(categoryType);

    // paso 3: Obtener lista de productos a mostrar
    const products = await productsService.getProductsByCategoryId(category.id);

    res.render("category", {
      title: category.title,
      activePage: category.slug,
      category,
      products,
    });
  } catch (error) {
    console.log(error);
  }
};


