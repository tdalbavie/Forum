import React from "react";

const Cart = ({ cartItems, updateCartItem }) => {
  // Function to calculate subtotal for an individual item
  const calculateItemSubtotal = (item) => {
    return item.product.price * item.quantity;
  };

  // Function to calculate total quantity of items in the cart
  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  // Function to calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += calculateItemSubtotal(item);
    });
    return totalPrice;
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product._id}>
            {item.product.productName} - Quantity:
            <button onClick={() => updateCartItem(item.product._id, -1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateCartItem(item.product._id, 1)}>
              +
            </button>
            &nbsp; Subtotal: ${calculateItemSubtotal(item)}
          </li>
        ))}
      </ul>
      <p>Total Quantity: {calculateTotalQuantity()}</p>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
