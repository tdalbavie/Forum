import React, { useState } from 'react';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
import './CreateArticlePage.css'; // Link to the CSS file

const CreateArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Article created successfully!');
        // Consider redirecting the user to the articles list or the detail page of the new article
      } else {
        alert('Failed to create article. Please try again.');
      }
    } catch (error) {
      console.error('Failed to create article:', error);
      alert('Failed to create article. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1>Create an Article</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name="title" 
            type="text" 
            placeholder="Please Make It Avocado Themed" 
            onChange={handleChange} 
            required 
            className="form-input"
          />
          <textarea 
            name="content" 
            placeholder="Please Make It Avocado Themed" 
            onChange={handleChange} 
            required 
            className="form-textarea"
          />
          <button type="submit" className="submit-button">Submit Article</button>
        </form>
      </div>
    </>
  );
};

export default CreateArticlePage;
