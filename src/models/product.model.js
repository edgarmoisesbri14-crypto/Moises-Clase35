import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, default: ""},
    createAT: {type: Date, default: Date.now},
});

export const Product = mongoose.model("Product", productSchema);
