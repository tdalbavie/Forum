import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
//import './Avocado101Page.css'; // Link to the CSS file

const Avocado101Page = () => {
  return (
    <>
    <Navbar />
    <div style={{ paddingTop: '60px' }}>
    <div className="avocado-links">
      <h1>Avocado 101</h1>
      <ul>
        <li><Link to="/types-of-avocado">Types of Avocado</Link></li>
        <li><Link to="/history-avocado">History of Avocado</Link></li>
        <li><Link to="/how-to-grow-from-seed">How to Grow From Seed</Link></li>
        <li><Link to="/avocado-facts">Avocado Facts</Link></li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default Avocado101Page;
