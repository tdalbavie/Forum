import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
import './Avocado101Page.css'; // Link to the CSS file

//Placeholder images:
import baconAvocadoImage from '../images/baconAvocado.jpeg';
import seedAvocado from '../images/seedAvocado.png';
import reedAvocado from '../images/reedAvocado.jpeg';
import sharwilAvocado from '../images/sharwilAvocado.jpeg';

const Avocado101Page = () => {
  return (
    <>
      <Navbar />
      <div className="avocado-container" style={{ paddingTop: '60px' }}>
        <h1>Avocado 101</h1>
        <div className="avocado-links">
          <div className="topic-block">
            <Link to="/types-of-avocado">
              <img src={baconAvocadoImage} alt="Types of Avocado" />
              <span className="overlay-text">Types of Avocado</span>
            </Link>
          </div>

          <div className="topic-block">
            <Link to="/history-avocado">
              <img src={reedAvocado} alt="History of Avocado" />
              <span className="overlay-text">History of Avocado</span>
            </Link>
          </div>

          <div className="topic-block">
            <Link to="/how-to-grow-from-seed">
              <img src={seedAvocado} alt="How to Grow From Seed" />
              <span className="overlay-text">How to Grow From Seed</span>
            </Link>
          </div>

          <div className="topic-block">
            <Link to="/avocado-facts">
              <img src={sharwilAvocado} alt="Avocado Facts" />
              <span className="overlay-text">Avocado Facts</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};


export default Avocado101Page;
