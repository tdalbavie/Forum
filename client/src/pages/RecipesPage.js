import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './RecipesPage.css';
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
      <div className="recipes-container">
        <h1>Recipes</h1>
        <ul className="recipes-list">
          {recipes.map(recipe => (
            <li key={recipe._id}>
              <Link to={`/Recipes/${recipe._id}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RecipesPage;
