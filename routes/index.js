import express from "express";

const router = express.Router();

// Home Routes
router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/products", (req, res)=>{
  res.render("products")
})

router.get("/test", (req, res)=>{
  res.render("test")
})

export default router;
