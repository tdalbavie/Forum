import React from 'react';
import Navbar from '../components/Navbar';
import './AboutPage.css'; // Import the CSS here
import avocadoImage from '../images/zutanoAvocado.jpeg';


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={avocadoImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h1>Mission Statement</h1>
          <p>Our mission is to spread the love and knowledge of avocados to the world.</p>
          <h2>Who We Are</h2>
          <p>Bio about the organization or individual.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
