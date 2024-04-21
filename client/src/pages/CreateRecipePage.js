import React, { useState } from 'react';

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
    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Recipe Name" onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} required></textarea>
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipePage;
