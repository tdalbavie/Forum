import React from 'react';
//import '../generalCSS.css'; // Link to the CSS file
//import './AboutPage.css'; // Link to the CSS file

const AboutPage = () => {
  return (
    <div className="about-container">
      <img src="path_to_image.jpg" alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>Mission Statement</h1>
        <p>Our mission is to spread the love and knowledge of avocados to the world.</p>
        <h2>Who We Are</h2>
        <p>Bio about the organization or individual.</p>
      </div>
    </div>
  );
};

export default AboutPage;
