import express from "express";
import upload from "../middlewares/multer.js";
import { createProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/create', upload.single('image'), createProduct);

export default productRouter;