import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const response = await fetch('http://localhost:9000/recipes');
    if (response.ok) {
      const data = await response.json();
      setRecipes(data);
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
              <a href="#" onClick={() => navigate(`/Recipes/${recipe._id}`)}>
                {recipe.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default RecipesPage;
