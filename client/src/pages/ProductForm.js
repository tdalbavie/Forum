import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [inventory, setInventory] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("food"); // default to 'food'
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      productName,
      inventory,
      price,
      category,
      imageUrl, // include image URL in the product data
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/products",
        productData
      );
      if (response.status === 201) {
        alert("Product added successfully!");
        // Optionally reset form or redirect user
        setProductName("");
        setInventory("");
        setPrice("");
        setCategory("food");
      }
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product, check console for more information.");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Add a New Product</h2>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="inventory">Inventory:</label>
          <input
            type="number"
            id="inventory"
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="accesories">Accessories</option>
          </select>
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
