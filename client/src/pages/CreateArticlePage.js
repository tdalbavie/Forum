import React, { useState } from 'react';
import Navbar from '../components/Navbar';
//import '../generalCSS.css'; // Link to the CSS file
//import './CreateArticlePage.css'; // Link to the CSS file

const CreateArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
    alert('Article submitted for review!');
  };

  return (
    <>
    <Navbar />
    <div style={{ paddingTop: '60px' }}>
      <div>
        <h1>Create an Article</h1>
        <form onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder="Title" onChange={handleChange} required />
          <textarea name="content" placeholder="Content" onChange={handleChange} required />
          <button type="submit">Submit Article</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateArticlePage;
