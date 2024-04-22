import React from 'react';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
//import './AboutPage.css'; // Link to the CSS file

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="about-container" style={{ paddingTop: '60px' }}>
      <img src="path_to_image.jpg" alt="About Us" className="about-image" />
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
