import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
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

  const updateCartItem = (itemId, change) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.product._id === itemId) {
          const updatedQuantity = item.quantity + change;
          // If updated quantity is greater than zero, update the item quantity
          if (updatedQuantity > 0) {
            return { ...item, quantity: updatedQuantity };
          }
        }
        return item;
      });

      // Filter out items with quantity > 0
      const filteredCartItems = updatedCartItems.filter(
        (item) => item.quantity > 0
      );
      return filteredCartItems;
    });
  };

  useEffect(() => {
    // Save cartItems to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
