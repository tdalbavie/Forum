import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#A8E674', padding: '10px', boxSizing: 'border-box' }}>
      <button onClick={toggleDropdown} style={{ padding: '10px', fontSize: '16px' }}>Menu</button>
      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginTop: '10px' }}><Link to="/" onClick={toggleDropdown}>Home</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Signup" onClick={toggleDropdown}>Sign Up</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Login" onClick={toggleDropdown}>Login</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Categories" onClick={toggleDropdown}>Forum</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Recipes" onClick={toggleDropdown}>Recipes</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/CreateRecipe" onClick={toggleDropdown}>Create Recipe</Link></li>

          <li style={{ marginTop: '10px' }}><Link to="/articles" onClick={toggleDropdown}>Articles</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/create-article" onClick={toggleDropdown}>Create Article</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/avocado-101" onClick={toggleDropdown}>Avocado 101</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/about" onClick={toggleDropdown}>About</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
          
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
