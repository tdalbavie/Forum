import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Confirmation = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTotalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const calculateTotalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/checkout");
  };

  return (
    <div>
      <h1>Order Confirmation</h1>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.product._id}>
            <img
              src={item.product.imageUrl}
              alt={item.product.productName}
              style={{ width: "50px", height: "50px", marginRight: "10px" }} // Adjust size and margin as needed
            />
            {item.product.productName} - Quantity: {item.quantity}
          </li>
        ))}
        <p>Total Quantity: {calculateTotalQuantity}</p>
        <p>Total Price: ${calculateTotalPrice}</p>
        <button onClick={handleSubmit}>Continue Shopping</button>
        <h1>Thank you for shopping with us!!!</h1>
      </ul>
    </div>
  );
};

export default Confirmation;
