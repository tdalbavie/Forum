const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  inventory: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    required: true,
    enum: ["food", "clothes", "accesories"],
  },
  imageUrl: { type: String, required: true }, // New field for the image URL
});

module.exports = mongoose.model("Product", productSchema);
