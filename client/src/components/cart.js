import React, { useMemo } from "react";
import { useCart } from "../context/CartContext"; // Adjust path as needed
import { useNavigate } from "react-router-dom";
import "../cssFiles/styles.css"; // Ensure you have this line if the CSS is in a separate file

// CartItem component
const CartItem = ({ item }) => {
  const { updateCartItem, deleteCartItem } = useCart();

  return (
    <li key={item.product._id}>
      <img
        src={item.product.imageUrl}
        alt={item.product.productName}
        style={{ width: "50px", height: "50px", marginRight: "10px" }} // Adjust size and margin as needed
      />
      {item.product.productName} - Quantity:
      <button
        onClick={() => updateCartItem(item.product._id, -1)}
        disabled={item.quantity === 1}
        aria-label={`Decrease quantity of ${item.product.productName}`}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => updateCartItem(item.product._id, 1)}
        aria-label={`Increase quantity of ${item.product.productName}`}
      >
        +
      </button>
      &nbsp; Subtotal: ${item.product.price * item.quantity}
      <button
        onClick={() => deleteCartItem(item.product._id)}
        aria-label={`Remove ${item.product.productName} from cart`}
      >
        Delete
      </button>
    </li>
  );
};

// Cart component
const Cart = () => {
  const { cartItems } = useCart();
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

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.product._id} item={item} />
        ))}
      </ul>
      <p>Total Quantity: {calculateTotalQuantity}</p>
      <p>Total Price: ${calculateTotalPrice}</p>
      <button onClick={() => navigate("/checkout")}>Back to Store</button>
    </div>
  );
};

export default Cart;
