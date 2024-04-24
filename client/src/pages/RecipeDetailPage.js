import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:9000/recipes/${recipeId}`);
        if (response.ok) {
          const data = await response.json();
          setRecipe(data);
        } else {
          console.error('Failed to fetch recipe details');
          // Handle errors here, maybe set an error message in state and display it
        }
      } catch (error) {
        console.error('There was a problem fetching recipe details:', error);
        // Handle errors here, maybe set an error message in state and display it
      }
    };

    fetchRecipe();
  }, [recipeId]); // Dependency array with recipeId to refetch when it changes

  if (!recipe) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return (
    <>
      <Navbar />
      <div className="recipe-container">
        <h1>{recipe.name}</h1>
        <p className="ingredients-title">Ingredients</p>
        <p className="ingredients-content">{recipe.ingredients}</p>
        <p className="instructions-title">Instructions</p>
        <p className="instructions-content">{recipe.instructions}</p>
      </div>
    </>
  );
};

export default RecipeDetailPage;
