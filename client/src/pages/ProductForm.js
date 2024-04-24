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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-heading">Add a New Product</h2>
          <div>
            <label htmlFor="productName" className="form-label">Product Name:</label>
            <input
              type="text"
              id="productName"
              className="form-input"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="inventory" className="form-label">Inventory:</label>
            <input
              type="number"
              id="inventory"
              className="form-input"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="number"
              id="price"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="form-label">Category:</label>
            <select
              id="category"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="food">Food</option>
              <option value="clothes">Clothes</option>
            </select>
          </div>
          <div>
            <label htmlFor="imageUrl" className="form-label">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              className="form-input"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
