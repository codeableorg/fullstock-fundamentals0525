export async function getCart(req, res, next) {
  res.render("cart", {
    title: "Tu carrito",
    activePage: "cart",
  });
}


// Esta funcion se va a encargar de llenar al carrit
export async function addItem(req, res) {

  try {
   //  const { productId } = req.body;

    //     const product  = ????
    console.log("BODY??? del request",req.body); // POR QUE ESTA LLEGANDO UNDEFINED

    res.send({
      message: "llegaste al carrito de compra!!!!",
    });
  } catch (error) {
    console.log(error);
  }
}
