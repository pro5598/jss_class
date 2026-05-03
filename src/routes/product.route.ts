import { Request, Response, Router } from "express";
import { ProductController } from "../controllers/product.controller";

const productRoute: Router = Router();
const productController = new ProductController();

//1. Get All -persons
productRoute.get("/get/all", productController.getAllProducts);
productRoute.post("/create/product/new", productController.createProduct);

export { productRoute };
