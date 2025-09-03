import * as cartService from "../services/cartService.js"

export async function getCart(req, res, next) {
  res.render("cart", {
    title: "Tu carrito",
    activePage: "cart",
  });
}

// Esta funcion se va a encargar de llenar al carrit
export async function addItem(req, res) {
  try {
    const { productId } = req.body;

    // paso 2: agregar ese item al carrito
    await cartService.addItemToCart(productId, req.session.id)


    // paso 3: Una vez que ya tenemos toda la info del carrito actualizado, ontener el referer
    const referer = req.get("Referer") || "/cart";
    console.log("referer que es ?", referer)

    res.redirect(referer)
  } catch (error) {
    console.log(error);
  }
}
