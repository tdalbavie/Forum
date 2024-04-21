import React from 'react';
//import '../generalCSS.css'; // Link to the CSS file
//import './ArticlesPage.css'; // Link to the CSS file

const ArticlesPage = () => {
  return (
    <div className="articles-container">
      <div className="featured-article">
        <h1>Title of Featured Article</h1>
        <p>Summary of the article...</p>
      </div>
      <div className="article-grid">
        <div className="article">Article 1</div>
        <div className="article">Article 2</div>
        <div className="article">Article 3</div>
        <div className="article">Article 4</div>
      </div>
    </div>
  );
};

export default ArticlesPage;
