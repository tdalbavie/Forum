import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ArticleDetailPage.css';


const ArticleDetailPage = () => {
  const { articleId } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:9000/articles/${articleId}`);
        if (response.ok) {
          const data = await response.json();
          setArticle(data);
        } else {
          console.error('Failed to fetch article details');
        }
      } catch (error) {
        console.error('There was a problem fetching article details:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <Navbar />
        <div className="article-container" style={{ paddingTop: '60px' }}>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-content">{article.content}</p>
        </div>
    </>
  );
};

export default ArticleDetailPage;
