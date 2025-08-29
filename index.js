import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import sharedDataMiddleware from "./middleware/sharedDataMiddleware.js";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

// Aquí le dices a Express que el motor de vistas será EJS.
app.set("view engine", "ejs");

// .set(): Es un método propio de Express para definir variables de configuración en la aplicación.
// Aqui le estamos diciendo donde esta tu carpeta de vistas
app.set("views", "views");

// Esto sirve para que Express sirva archivos estáticos (CSS, imágenes, JS del lado del cliente, etc.).
app.use(express.static("public"));

// configuracion de Express EJS Layouts
// Aquí activas el middleware express-ejs-layouts.
// Este paquete te permite usar un layout base (un archivo .ejs que ENVUELVE a todas tus vistas).
// El layout funciona como una plantilla general con cabecera, pie de página, menú, etc.
// Dentro del layout habrá un marcador especial: <%- body %>
app.use(expressEjsLayouts);

// Le dices al middleware:
// El layout principal se llama root.ejs y está dentro de views/layouts/
// Nota: el argumento "layout", es una palabra resevada que es usada en la libreria 'express-ejs-layouts'
app.set("layout", "layouts/root");

// Este middleware, se ejecuta primero, y lo que hace es setear
// cierta variables , para que esten disponibles globalmente en el proyecto
app.use(sharedDataMiddleware);

// Definir las rutas que se utilizaran en todo el proyecto
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
