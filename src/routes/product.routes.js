import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { validateId, validateProduct, checkValidation } from "../validations/product.validate.js";

const routerProduct = Router();

routerProduct.get("/test", (req, res) => {
    res.json({ message: "test" });
});

routerProduct.get("/", productController.getAllProduct);
routerProduct.post("/", checkValidation(validateProduct), productController.createProduct);
routerProduct.get("/:id", checkValidation(validateId), productController.getProductById);
routerProduct.put("/:id", checkValidation([validateId, validateProduct]), productController.updateProduct);
routerProduct.delete("/:id", checkValidation(validateId), productController.deleteProduct);

export default routerProduct;




