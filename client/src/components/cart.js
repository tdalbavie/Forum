import React from "react";

const Cart = ({ cartItems }) => {
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

  // Function to group items by product ID (not needed anymore)

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product._id}>
            {item.product.productName} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Quantity: {calculateTotalQuantity()}</p>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
