import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
//import '../generalCSS.css'; // Link to the CSS file
//import './ArticlesPage.css'; // Link to the CSS file

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/getArticles')
    .then(function (response) {
      setArticles(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <div className="articles-container">
          <div className="article-grid">
            {articles.map((article, index) => (
              <div className="article-card" key={index}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;