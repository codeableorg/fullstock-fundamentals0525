import { findAllCategories } from "../data/db.js";
import * as cartService from "../services/cartService.js";

export default async function sharedDataMiddleware(req, res, next) {
  try {
    const categories = await findAllCategories();

    // Obtener informacion del carrito!
    const cartData = await cartService.getCartData(req.session.id);

    // Calcular la cantidad de artículos en el carrito para el contador
    const cartItemCount = cartData.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;
    res.locals.activePage = null;
    res.locals.cartItemCount = cartItemCount;
    res.locals.cart = cartData;

    next();
  } catch (error) {
    next(error);
  }
}
