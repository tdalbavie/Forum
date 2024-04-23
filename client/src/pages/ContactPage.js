import React, { useState } from 'react';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
import './ContactPage.css';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted! We will contact you via email.');
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <p>Customer Service: (+1)123-456-7890</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
