import React, { useState } from 'react';
//import '../generalCSS.css'; // Link to the CSS file
//import './ContactPage.css'; // Link to the CSS file

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted! We will contact you via email.');
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p>Customer Service: 123-456-7890</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
};

export default ContactPage;
