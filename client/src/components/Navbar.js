import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to handle adding experience points
  const handleExperiencePoints = async () => {
    if (user) {
      try {
        const response = await axios.post('http://localhost:9000/users/add-experience', {
          userId: user._id,
          pointsToAdd: 10,
        });

        if (response.status === 200) {
          console.log('Experience points added successfully');
        }
      } catch (error) {
        console.error('Error adding experience points:', error);
      }
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'skyblue', padding: '10px', boxSizing: 'border-box' }}>
      <button onClick={toggleDropdown} style={{ padding: '10px', fontSize: '16px' }}>Menu</button>
      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginTop: '10px' }}><Link to="/" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Home</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Signup" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Sign Up</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Login" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Login</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Experience-Check" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Experience Check</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Categories" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Forum</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Recipes" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Recipes</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/CreateRecipe" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Create Recipe</Link></li>

          <li style={{ marginTop: '10px' }}><Link to="/about" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>About</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/articles" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Articles</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/create-article" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Create Article</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/avocado-101" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Avocado 101</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/contact" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Contact</Link></li>
          
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
