import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart hook
import Cart from "../components/cart";
import Navbar from "../components/Navbar";
import "./CheckoutPage.css";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cartItems, updateCartItem } = useCart(); // Access cartItems and updateCartItem from CartContext
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
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
    navigate("/conformation");
  };

  return (
    <div>
      <Navbar />
      <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <img
          src="https://th.bing.com/th/id/OIP.GLfU6tGgbDoy4tiVfsOY5gHaBB?rs=1&pid=ImgDetMain"
          alt="checkout_cards"
          style={{ width: "500px", height: "50px", marginRight: "10px" }} // Adjust size and margin as needed
        />
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
          <label>Address: </label>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
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
