import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';

function ExperiencePage() {
  const { user } = useUser();
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    fetchUserExperience(user._id)
      .then(experiencePoints => {
        setExperience(experiencePoints);
      })
      .catch(error => {
        console.error("Error fetching experience level:", error);
      });
  }, [user._id]);

  const fetchUserExperience = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/users/${userId}/experience`);
      const data = await response.json();
      return data.experiencePoints;
    } catch (error) {
      console.error("Error fetching experience level:", error);
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <div>
          <h1>Experience Level</h1>
          <p>Your current experience level is: {experience}</p>
        </div>
      </div>
    </>
  );
}

export default ExperiencePage;
