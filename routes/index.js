import express from "express";
import * as homeController from "../controller/homeController.js";
import * as categoryController from "../controller/categoryController.js";

const router = express.Router();

// Home Routes
router.get("/", homeController.getHomePage);

// Ruta de categories (polos, tazas y stickers)
router.get("/:categoryType", categoryController.getProductsByCategory);

// router.get("/polos", (req, res) => {
//   res.send("lista de polos ");
// });
// router.get("/tazas", (req, res) => {
//   res.send("lista de tazas ");
// });
// router.get("/stickers", (req, res) => {
//   res.send("lista de stickers ");
// });

// router.get("/products", (req, res) => {
//   res.render("products");
// });

// router.get("/test", (req, res) => {
//   res.render("test");
// });

export default router;
