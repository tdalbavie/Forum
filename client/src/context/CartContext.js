// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItem = (productId, quantityChange) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]); // Clears the cart
  };

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

  const deleteCartItem = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product._id !== productId)
    );
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItem,
        deleteCartItem,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
