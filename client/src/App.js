import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Context to track user loggin.
import { UserProvider } from './context/UserContext';
// All pages in the project..
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage'; // Import CategoriesPage
import ThreadsPage from './pages/ThreadsPage'; // Import ThreadsPage
import PostsPage from './pages/PostsPage'; // Import PostsPage
import RecipesPage from './pages/RecipesPage'; // Import RecipesPage
import CreateRecipePage from './pages/CreateRecipePage'; // Import CreateRecipePage

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Categories" element={<CategoriesPage />} /> 
            <Route path="/Categories/:categoryId/Threads" element={<ThreadsPage />} /> 
            <Route path="/Threads/:threadId/Posts" element={<PostsPage />} /> 
            <Route path="/Recipes" element={<RecipesPage />} />
            <Route path="/CreateRecipe" element={<CreateRecipePage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
