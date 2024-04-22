import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:9000/recipes');
      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        alert('Failed to fetch recipes. Please try again later.');
        console.error('Failed to fetch recipes');
      }
    } catch (error) {
      alert('Failed to fetch recipes. Please try again later.');
      console.error('There was a problem fetching recipes:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <div>
          <h1>Recipes</h1>
          <ul>
            {recipes.map(recipe => (
              <li key={recipe._id}>
                <Link to={`/Recipes/${recipe._id}`}>
                  {recipe.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipesPage;
