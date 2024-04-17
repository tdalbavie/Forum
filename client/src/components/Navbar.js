import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'skyblue', padding: '10px', boxSizing: 'border-box' }}>
      <button onClick={toggleDropdown} style={{ padding: '10px', fontSize: '16px' }}>Menu</button>
      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginTop: '10px' }}><Link to="/" onClick={toggleDropdown}>Home</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Signup" onClick={toggleDropdown}>Sign Up</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Login" onClick={toggleDropdown}>Login</Link></li>
          <li style={{ marginTop: '10px' }}><Link to="/Categories" onClick={toggleDropdown}>Forum</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
