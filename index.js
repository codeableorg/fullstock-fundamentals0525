import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public")); // /

const products = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
  { id: 3, name: "Producto 3", price: 300 },
  { id: 4, name: "Producto 4", price: 400 },
  { id: 5, name: "Producto 5", price: 500 },
  { id: 6, name: "Producto 6", price: 600 },
];

const categories = [
  {
    id: 1,
    name: "Polos",
    image: "/images/polos.jpg",
    description:
      "Polos exclusivos con diseños que todo desarrollador querrá lucir. Ideales para llevar el código a donde vayas.",
  },
  {
    id: 2,
    name: "Tazas",
    image: "/images/tazas.jpg",
    description:
      "Tazas que combinan perfectamente con tu café matutino y tu pasión por la programación. ¡Empieza el día con estilo!",
  },
  {
    id: 3,
    name: "Stickers",
    image: "/images/stickers.jpg",
    description:
      "Personaliza tu espacio de trabajo con nuestros stickers únicos y muestra tu amor por el desarrollo web.",
  },
];

app.get("/", (req, res) => {
  // Para mañana:
  // Obtener los productos desde el archivo Json
  // const products = getProducts();
  //res.render("productos", { products });
  res.render("home", { categories });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
