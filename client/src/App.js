import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context to track user loggin.
import { UserProvider } from "./context/UserContext";
// All pages in the project..
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CategoriesPage from "./pages/CategoriesPage";
import ThreadsPage from "./pages/ThreadsPage";
import PostsPage from "./pages/PostsPage";
import RecipesPage from "./pages/RecipesPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import Avocado101Page from "./pages/Avocado101Page";
import ContactPage from "./pages/ContactPage";

import TypesOfAvocadoPage from "./pages/TypesOfAvocadoPage";
import HowToGrowFromSeedPage from "./pages/HowToGrowFromSeedPage";
import AvocadoFactsPage from "./pages/AvocadoFactsPage";

import HistoryAvocadoPage from "./pages/HistoryAvocadoPage";
import ProductForm from "./pages/ProductForm";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentMethod from "./pages/PaymentMethod";

import ArticleDetailPage from "./pages/ArticleDetailPage";
import ExperienceCheck from "./pages/ExperiencePage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/Signup" element={<SignupPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Categories" element={<CategoriesPage />} />
              <Route
                path="/Categories/:categoryId/Threads"
                element={<ThreadsPage />}
              />
              <Route path="/Threads/:threadId/Posts" element={<PostsPage />} />

              <Route path="/Recipes" element={<RecipesPage />} />
              <Route path="/CreateRecipe" element={<CreateRecipePage />} />
              <Route path="/Recipes/:recipeId" element={<RecipeDetailPage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/create-article" element={<CreateArticlePage />} />
              <Route
                path="/Articles/:articleId"
                element={<ArticleDetailPage />}
              />

              <Route path="/avocado-101" element={<Avocado101Page />} />
              <Route
                path="/types-of-avocado"
                element={<TypesOfAvocadoPage />}
              />
              <Route path="/history-avocado" element={<HistoryAvocadoPage />} />

              <Route
                path="/how-to-grow-from-seed"
                element={<HowToGrowFromSeedPage />}
              />
              <Route path="/avocado-facts" element={<AvocadoFactsPage />} />
              <Route path="/Experience-Check" element={<ExperienceCheck />} />

              <Route path="/productForm" element={<ProductForm />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/pay" element={<PaymentMethod />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
