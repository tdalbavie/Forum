import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart hook
import Cart from "../components/cart";
import Navbar from "../components/Navbar";
import './PaymentMethod.css';
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-heading">Checkout Form</h2>
          <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
          <div>
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Credit Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Expiration Date:</label>
            <input
              type="text"
              name="expDate"
              placeholder="MM/YY"
              value={formData.expDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="button">Complete Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
