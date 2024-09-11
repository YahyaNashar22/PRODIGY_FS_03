import Product from "../models/productModel.js";

// create product
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, categoryId } = req.body;
        const image = req.file?.filename;

        const product = new Product({
            name,
            description,
            price,
            quantity,
            categoryId,
            image
        });
        await product.save();

        return res.status(201).json({
            message: "product created successfully!",
            payload: product
        })


    } catch (error) {
        res.status(500).json({ message: "problem creating product!", error: error.message })
        console.log(error)
    }
}