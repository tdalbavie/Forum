import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "../context/UserContext";
import ProductTile from "../components/ProductTile";

const ProductList = () => {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to hold the items in the cart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:9000/getProducts`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    // Find the product with the matching ID
    const productToAdd = products.find((product) => product._id === productId);
    if (productToAdd) {
      // Add the product to the cart
      setCart([...cart, productToAdd]);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <h2>Products</h2>
        <div className="columns is-multiline">
          {products.map((product) => (
            <div key={product._id} className="column is-one-third">
              <ProductTile product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
