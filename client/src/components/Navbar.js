import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this is correctly pointing to your CSS file
import { useUser } from '../context/UserContext';
import axios from 'axios';
import shoppingCartIcon from "../images/ShoppingCartIconTransparent.png"; // import the image file

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
    <nav className="navbar">
      <button onClick={toggleDropdown}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <span className="navbar-title">All About Avocados</span>
      <div className="navbar-right">
        <Link to="/pay" className="icon-button">
          <img
            src={shoppingCartIcon}
            alt="Shopping Cart"
            style={{ width: "24px", height: "24px" }} // Adjust width and height as needed
          />
        </Link>
      </div>
      <ul className={isOpen ? 'show-dropdown' : ''}>
        <li><Link to="/" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Home</Link></li>
        <li><Link to="/Signup" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Sign Up</Link></li>
        <li><Link to="/Login" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Login</Link></li>
        <li><Link to="/Categories" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Forum</Link></li>
        <li><Link to="/Experience-Check" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Experience Check</Link></li>
        <li><Link to="/Recipes" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Recipes</Link></li>
        <li><Link to="/CreateRecipe" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Create Recipe</Link></li>
        <li><Link to="/articles" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Articles</Link></li>
        <li><Link to="/create-article" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Create Article</Link></li>
        <li><Link to="/avocado-101" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Avocado 101</Link></li>
        <li><Link to="/productForm" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Insert Product</Link></li>
        <li><Link to="/shoppingcart" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Shopping Cart</Link></li>
        <li><Link to="/pay" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Payment Method</Link></li>
        <li><Link to="/about" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>About</Link></li>
        <li><Link to="/contact" onClick={() => { toggleDropdown(); handleExperiencePoints(); }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
