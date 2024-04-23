import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ArticlesPage.css'; 

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:9000/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          console.error('Failed to fetch articles');
        }
      } catch (error) {
        console.error('There was a problem fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Navbar />
      <div className="articles-container">
        <h1>Articles</h1>
        <ul className="articles-list">
          {articles.map(article => (
            <li key={article._id}>
              <Link to={`/Articles/${article._id}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArticlesPage;
