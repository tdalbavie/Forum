import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
//import '../generalCSS.css'; // Link to the CSS file
//import './CreateArticlePage.css'; // Link to the CSS file

const CreateArticlePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = { title, content };
    axios.post('http://localhost:9000/createArticle', values)
      .then((res) => alert('Article created successfully'))
      .catch((err) => alert('Error in creating article: ' + err));
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <div>
          <h1>Create an Article</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              required
            />
            <textarea
              name="content"
              placeholder="Content"
              value={content}
              onChange={handleContentChange}
              required
            />
            <button type="submit">Submit Article</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateArticlePage;
