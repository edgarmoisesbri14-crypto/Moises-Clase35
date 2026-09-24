import { Product } from "../models/product.model.js";

const getServiceProduct = () => {
    return Product.find();
};

const createServiceProduct = (ProductData) => {
    const newProduct = new Product(ProductData);
    return newProduct.save();
};

const getServiceProductById = (ProductId) => {
    return Product.findById(ProductId);
};

const updateServiceProduct = (ProductId, productData) => {
    return Product.findByIdAndUpdate(ProductId, productData, { new: true});
};

const deleteServiceProduct = (userId) => {
    return Product.findByIdAndDelete(userId);

};

export {

    getServiceProduct,
    createServiceProduct,
    getServiceProductById,
    updateServiceProduct,
    deleteServiceProduct
};