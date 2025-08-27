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

app.get("/", (req, res) => {
  // Para mañana:
  // Obtener los productos desde el archivo Json
  // const products = getProducts();
  res.render("productos", { products });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
