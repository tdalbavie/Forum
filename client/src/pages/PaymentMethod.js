import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart hook
import Cart from "../components/cart";
import Navbar from "../components/Navbar";

const CheckoutForm = () => {
  const { cartItems, updateCartItem } = useCart(); // Access cartItems and updateCartItem from CartContext

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here you would usually send the data to a server or another process
    alert("Checkout complete!");
  };

  return (
    <div>
      <Navbar />
      <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Credit Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expDate"
            placeholder="MM/YY"
            value={formData.expDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Complete Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
