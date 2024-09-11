import express from "express";
import upload from "../middlewares/multer.js";
import { createProduct, deleteProduct, editProduct, getAllProducts, getOneProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/create', upload.single('image'), createProduct);

productRouter.post('/get', getAllProducts);

productRouter.get('/get/:slug', getOneProduct);

productRouter.put('/edit/:id', upload.single('image'), editProduct);

productRouter.delete('/delete/:id', deleteProduct);



export default productRouter;