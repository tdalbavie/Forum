import React, { useState } from "react";
import "../cssFiles/styles.css"; // Ensure CSS is correctly imported

const ProductTile = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10)); // Always specify the radix
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Add to cart logic
    setNotification(`${quantity} x ${product.productName} added to cart!`); // Set the notification message
    setTimeout(() => {
      setNotification(""); // Clear the notification after 1000 milliseconds (1 second)
    }, 1000);
  };

  return (
    <div
      className="product-tile"
      style={{ width: "200px", textAlign: "center" }}
    >
      <img
        src={product.imageUrl}
        alt={product.productName}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <div>{product.productName}</div>
      <p>Price: ${product.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleQuantityChange}
        style={{ width: "50px" }}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
      {notification && (
        <div style={{ color: "green", marginTop: "10px" }}>{notification}</div>
      )}
    </div>
  );
};

export default ProductTile;
