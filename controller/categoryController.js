import * as categoryService from "../services/categoryService.js";

export const getProductsByCategory = async (req, res) => {
  try {
    // paso 1: Obtener el valor del param de la URL, para saber si nos llego la ruta de : /polos o /tazas o /stickers
    const { categoryType } = req.params;

    // paso 2: Obtener la lista de productos por cada tipo de categoria
    const category = await categoryService.getProductsByCategory(categoryType);

    res.render("test", { title: category.title, activePage: category.slug, category });
  } catch (error) {
    console.log(error);
  }
};
