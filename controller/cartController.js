export async function getCart(req, res, next) {
  res.render("cart", {
    title: "Tu carrito",
    activePage: "cart",
  });
}


// Esta funcion se va a encargar de llenar al carrit
export async function addItem(req, res) {

  try {
    //     const product  = ????
    console.log("BODY???'",req.body);

    res.send({
      message: "llegaste al carrito de compra!!!!",
    });
  } catch (error) {
    console.log(error);
  }
}
