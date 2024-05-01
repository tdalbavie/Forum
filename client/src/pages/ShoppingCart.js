import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext"; // Import useCart hook
import "./ShoppingCart.css"; 
const ShoppingCart = () => {
  const { cartItems, addToCart } = useCart(); // Access cartItems and addToCart from CartContext

  return (
    <div className="shopping-cart">
      <Navbar />
      <div className="container">
        <ProductList addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ShoppingCart;
