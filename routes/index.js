import express from "express";
import * as homeController from "../controller/homeController.js";

const router = express.Router();

// Home Routes
router.get("/", homeController.getHomePage);


router.get("/products", (req, res) => {
  res.render("products");
});

router.get("/test", (req, res) => {
  res.render("test");
});

export default router;
