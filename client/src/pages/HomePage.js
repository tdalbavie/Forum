import React from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {
  const { user, logout } = useUser();

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <h1>Welcome to the Forum</h1>
        {user ? (
          <>
            <p>Welcome, {user.username}! You are logged in as {user.role}.</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <p>If you have an account, <Link to="/Login">log in</Link> to see the latest topics. If you don't have an account, <Link to="/Signup">sign up</Link> to join the discussion!</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
