import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart hook
import Cart from "../components/cart";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./PaymentMethod.css";

const CheckoutForm = () => {
  const { cartItems, updateCartItem } = useCart(); // Access cartItems and updateCartItem from CartContext
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    email: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/confirmation");
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
        <form onSubmit={handleSubmit}>
          <h2 className="form-heading">Checkout Form</h2>
          <img
            src="https://th.bing.com/th/id/OIP.GLfU6tGgbDoy4tiVfsOY5gHaBB?rs=1&pid=ImgDetMain"
            alt="checkout_cards"
            style={{ width: "500px", height: "50px", marginRight: "10px" }} // Adjust size and margin as needed
          />
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
            <label className="form-label">Street:</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">City:</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">State:</label>
            <input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Zip Code:</label>
            <input
              type="text"
              name="address.zipCode"
              value={formData.address.zipCode}
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
          <button type="submit" className="button">
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
