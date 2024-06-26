import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CategoriesPage.css';
const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const { user } = useUser();

  // Function to fetch categories
  const fetchCategories = async () => {
    const response = await fetch('http://localhost:9000/categories');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateNewCategory = () => {
    const categoryName = prompt("Enter the name of the new category:");
    const categoryDescription = prompt("Enter the description of the new category:");

    if (categoryName && categoryDescription) {
        fetch('http://localhost:9000/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: categoryName, description: categoryDescription, userRole: user.role }),
        })
            .then(response => {
                if (response.ok) {
                    fetchCategories();
                } else {
                    alert('Failed to create category. Please try again.');
                }
            })
            .catch(error => {
                console.error('Failed to create category:', error);
                alert('Failed to create category. Please try again.');
            });
    }
};


  const handleDeleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:9000/categories/${categoryId}`, {
          method: 'DELETE',
          // Again, you might want to send an authorization token here
        });
        fetchCategories(); // Refresh categories list after deletion
      } catch (error) {
        console.error("Failed to delete category:", error);
        alert('Failed to delete category. Please try again.');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Forum Categories</h1>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category._id} className="category-item">
              <Link to={`/Categories/${category._id}/Threads`} className="category-link">
                <span className="category-title">{category.title}</span>
                <span className="category-description">{category.description}</span>
              </Link>
              {user && user.role === 'admin' && (
                <button onClick={() => handleDeleteCategory(category._id)} className="admin-button">
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
        {user && user.role === 'admin' && (
          <button onClick={handleCreateNewCategory} className="admin-button">
            Create New Category
          </button>
        )}
      </div>
    </>
  );
};

export default CategoriesPage;
