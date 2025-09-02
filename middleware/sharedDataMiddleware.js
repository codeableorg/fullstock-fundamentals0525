import { findAllCategories } from "../data/db.js";
import * as cartService from "../services/cartService.js";

export default async function sharedDataMiddleware(req, res, next) {
  try {
    const categories = await findAllCategories();

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;

    // Obtener informacion del carrito!
      const cartData = await cartService.getCartData(req.session.id);

    next();
  } catch (error) {
    next(error);
  }
}
