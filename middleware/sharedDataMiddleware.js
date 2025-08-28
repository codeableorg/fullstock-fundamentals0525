import * as categoryService from "../services/categoryService.js";
import * as cartService from "../services/cartService.js";

export default async function sharedDataMiddleware(req, res, next) {
  try {
    // Obtener categorías para la navegación
    const categories = await categoryService.getAllCategories();

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;

    next();
  } catch (error) {
    next(error);
  }
}
