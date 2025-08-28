import * as categoryService from "../services/categoryService.js";
import * as cartService from "../services/cartService.js";

export default async function sharedDataMiddleware(req, res, next) {
  try {
    // Obtener categorías para la navegación
    const categories = await readDB(); // ?? aqu esta el error
    // aqui esto debe hacece un update

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;

    next();
  } catch (error) {
    next(error);
  }
}
