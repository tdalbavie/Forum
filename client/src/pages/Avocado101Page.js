import React from 'react';
import { Link } from 'react-router-dom';
//import '../generalCSS.css'; // Link to the CSS file
//import './Avocado101Page.css'; // Link to the CSS file

const Avocado101Page = () => {
  return (
    <div className="avocado-links">
      <h1>Avocado 101</h1>
      <ul>
        <li><Link to="/types-of-avocado">Types of Avocado</Link></li>
        <li><Link to="/history-avocado">History of Avocado</Link></li>
        <li><Link to="/how-to-grow-from-seed">How to Grow From Seed</Link></li>
        <li><Link to="/avocado-facts">Avocado Facts</Link></li>
      </ul>
    </div>
  );
};

export default Avocado101Page;
