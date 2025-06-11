// import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     imageUrl: { type: String, required: true }
// });

// const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

// export default Product;

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  description: { type: String },
  price: { type: Number },
}, { collection: "eShop" }); // 👈 Important: yahan collection explicitly mention hai

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
