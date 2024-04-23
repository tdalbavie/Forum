import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this is correctly pointing to your CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button onClick={toggleDropdown}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <span className="navbar-title">All About Avocados</span>
      <ul className={isOpen ? 'show-dropdown' : ''}>
        <li><Link to="/" onClick={toggleDropdown}>Home</Link></li>
        <li><Link to="/Signup" onClick={toggleDropdown}>Sign Up</Link></li>
        <li><Link to="/Login" onClick={toggleDropdown}>Login</Link></li>
        <li><Link to="/Categories" onClick={toggleDropdown}>Forum</Link></li>
        <li><Link to="/Recipes" onClick={toggleDropdown}>Recipes</Link></li>
        <li><Link to="/CreateRecipe" onClick={toggleDropdown}>Create Recipe</Link></li>
        <li><Link to="/articles" onClick={toggleDropdown}>Articles</Link></li>
        <li><Link to="/create-article" onClick={toggleDropdown}>Create Article</Link></li>
        <li><Link to="/avocado-101" onClick={toggleDropdown}>Avocado 101</Link></li>
        <li><Link to="/productForm" onClick={toggleDropdown}>Insert Product</Link></li>
        <li><Link to="/checkout" onClick={toggleDropdown}>Checkout</Link></li>
        <li><Link to="/pay" onClick={toggleDropdown}>Payment Method</Link></li>
        <li><Link to="/about" onClick={toggleDropdown}>About</Link></li>
        <li><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
