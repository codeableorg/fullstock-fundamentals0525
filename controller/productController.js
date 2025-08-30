import * as productService from "../services/productService.js";
export const getProduct = async (req, res) => {
  try {
    const { categoryType, id } = req.params;

    const productData = await productService.getProductbyId(Number(id));

    res.render("productDetail", {
      title: productData.title,
      activePage: "",
      product: productData
    });
  } catch (error) {
    console.log(error);
  }
};
