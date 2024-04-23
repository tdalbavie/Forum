import React from 'react';
import Navbar from '../components/Navbar';
import './AboutPage.css'; // Import the CSS here
import placeholderImage from '../images/placeholder.jpeg'; // Placeholder image
import avocadoImage from '../images/wavingAvocado.png'; // Main about image
// Import individual team member images
// import wyattImage from '../images/wyattImage.jpeg';
// import thomasImage from '../images/thomasImage.jpeg';
// import tristanImage from '../images/tristanImage.jpeg';
// import dylanImage from '../images/dylanImage.jpeg';
// import elijuwonImage from '../images/elijuwonImage.jpeg';

import wyattImage from '../images/wyattImage.png';
import thomasImage from '../images/placeholder.jpeg';
import tristanImage from '../images/placeholder.jpeg';
import dylanImage from '../images/placeholder.jpeg';
import elijuwonImage from '../images/wavingAvocado.png';


const teamMembers = [
  { name: 'Wyatt', description: 'Bio about Wyatt.', image: wyattImage },
  { name: 'Thomas', description: 'Bio about Thomas.', image: thomasImage },
  { name: 'Tristan', description: 'Bio about Tristan.', image: tristanImage },
  { name: 'Dylan', description: 'Bio about Dylan.', image: dylanImage },
  { name: 'Elijuwon', description: 'Bio about Elijuwon.', image: elijuwonImage },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={avocadoImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h1>Mission Statement</h1>
          <p>Our mission is to spread the love and knowledge of avocados to the world.</p>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
