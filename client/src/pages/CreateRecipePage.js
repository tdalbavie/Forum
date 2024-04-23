import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './CreateRecipePage.css'; 

const CreateRecipePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Recipe created successfully!');
      } else {
        alert('Failed to create recipe. Please try again.');
      }
    } catch (error) {
      console.error('Failed to create recipe:', error);
      alert('Failed to create recipe. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-recipe-container">
        <div>
          <h2>Create Recipe</h2>
          <form onSubmit={handleSubmit} className="create-recipe-form">
            <input
              name="name"
              type="text"
              placeholder="Recipe Name"
              onChange={handleChange}
              required
              />
            <textarea
              name="ingredients"
              placeholder="Ingredients (Reminder, it should include Avocados ;P)"
              onChange={handleChange}
              required
              />
            <textarea
              name="instructions"
              placeholder="Instructions"
              onChange={handleChange}
              required
              />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRecipePage;
