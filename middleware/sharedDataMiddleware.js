import { findAllCategories } from "../data/db.js";

export default async function sharedDataMiddleware(req, res, next) {
  try {
    const categories = await findAllCategories();

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;
    res.locals.titleOfApplication = "FullStock";
    res.locals.chavito = "Lo que sea";

    next();
  } catch (error) {
    next(error);
  }
}
