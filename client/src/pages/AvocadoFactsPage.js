import React from 'react';
import Navbar from '../components/Navbar';
import './AvocadoFactsPage.css'; // Link to the CSS file

const AvocadoFactsPage = () => {
  return (
    <>
    <Navbar />
    <div className="facts-container">
      <h1 className="facts-header">Avocado Facts</h1>
      <ol className="facts-list">
        <li><strong>Origins:</strong> Avocados are native to Central and South America, with archaeological evidence suggesting they were cultivated as early as 5000 BCE.</li>
        <li><strong>Berry, Not a Vegetable:</strong> Botanically, avocados are classified as berries, belonging to the Lauraceae family along with cinnamon and bay leaves.</li>
        <li><strong>Name Origin:</strong> The word "avocado" comes from the Aztec word "āhuacatl," which means testicle, due to the fruit's shape and supposed aphrodisiac qualities.</li>
        <li><strong>Ancient Symbolism:</strong> In ancient Aztec culture, avocados were considered a symbol of fertility and were often associated with love and sexuality.</li>
        <li><strong>Nutrient Dense:</strong> Avocados are packed with nutrients, including healthy monounsaturated fats, potassium, fiber, and vitamins C, E, and K.</li>
        <li><strong>Slow Ripening:</strong> Unlike many fruits, avocados do not ripen on the tree. Instead, they mature after harvest. The ripening process can be accelerated by placing avocados in a paper bag with a banana or apple due to the ethylene gas they produce.</li>
        <li><strong>Varieties:</strong> While Hass avocados are the most popular variety, there are over 500 different types of avocados, each with its own unique taste, texture, and size.</li>
        <li><strong>Larger Seed, Smaller Fruit:</strong> The seed of an avocado can often take up a significant portion of the fruit, sometimes up to 25% of its weight.</li>
        <li><strong>Sensitive Trees:</strong> Avocado trees are sensitive to frost and wind, and they require well-drained soil. They are also vulnerable to various pests and diseases.</li>
        <li><strong>Avocado Toast Craze:</strong> The trend of avocado toast gained popularity in the early 2010s, with many cafes and restaurants offering creative variations featuring avocado as a primary ingredient.</li>
        <li><strong>Healthy Fat Source:</strong> Avocados are one of the few fruits that contain healthy monounsaturated fats, which are beneficial for heart health and can help lower bad cholesterol levels.</li>
        <li><strong>Growth in Popularity:</strong> Avocado consumption has surged in recent years, with demand driven by its versatility, nutritional value, and popularity in dishes like guacamole, salads, sandwiches, and smoothies.</li>
        <li><strong>Environmental Impact:</strong> Avocado cultivation can have significant environmental implications, particularly in regions where water scarcity is a concern. However, sustainable farming practices are being developed to mitigate these impacts.</li>
        <li><strong>Avocado Art:</strong> Avocado skin and pits can be used as natural dyes for textiles and artwork due to their vibrant colors and staining properties.</li>
        <li><strong>Cultural Significance:</strong> Avocados hold cultural significance in many cuisines around the world, from traditional Mexican dishes like tacos and enchiladas to contemporary fusion cuisine.</li>
      </ol>
    </div>
    </>
  );
};

export default AvocadoFactsPage;
