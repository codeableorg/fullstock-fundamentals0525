import express from "express";
import * as homeController from "../controller/homeController.js";
import * as categoryController from "../controller/categoryController.js";
import * as productController from "../controller/productController.js";
import * as cartController from "../controller/cartController.js";

const router = express.Router();

// Home Routes
router.get("/", homeController.getHomePage);

// Products Routes
router.get("/products/:id", productController.getProduct);

// Rutas para el carrito de compra
router.get("/cart", cartController.getCart);
router.post("/cart/add-item", cartController.addItem);

// Ruta de categories (polos, tazas y stickers)
router.get("/:categoryType", categoryController.getProductsByCategory);

export default router;
