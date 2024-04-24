// ShoppingCart.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Cart from "../components/cart";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product: product, quantity: quantity }]);
    }
  };

  // Function to update cart item quantity
  const updateCartItem = (itemId, change) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.product._id === itemId) {
          return { ...item, quantity: item.quantity + change };
        }
        return item;
      });
    });
  };

  return (
    <div className="shopping-cart">
      <Navbar />
      <div className="container">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
      </div>
    </div>
  );
};

export default ShoppingCart;
