import React from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './HomePage.css';

function HomePage() {
  const { user, logout } = useUser();

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-title">
          <h1>Welcome To All About Avocados!</h1>
          <img src={require('../images/wavingAvocado.png')} alt="Waving Avocado" className="home-avocado-image" />
            <div className="home-welcome">
            {user ? (
              <>
                <p>Welcome, {user.username}! You are logged in as {user.role}.</p>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <div className="home-login-signup">
                <p>If you have an account, <Link to="/Login">log in</Link> to see the latest topics. If you don't have an account, <Link to="/Signup">sign up</Link> to join the discussion!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default HomePage;
