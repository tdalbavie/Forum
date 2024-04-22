import React from 'react';
import Navbar from '../components/Navbar';
import './TypesOfAvocadoPage.css';


// List of avocado types
const avocadoTypes = [
    { name: "Bacon", desc: "Light brown skin and lighter taste.", img: "baconAvocado.jpeg" },
    { name: "Brogden", desc: "Dark purple hybrid, resistant to cold, and hard to peel.", img: "brogdenAvocado.jpeg" },
    { name: "Choquette", desc: "Smooth, glossy skin with watery flesh.", img: "choquetteAvocado.jpeg" },
    { name: "Cleopatra", desc: "Small dwarf avocado.", img: "cleopatraAvocado.jpeg" },
    { name: "Ettinger", desc: "Bright green skin, large seed, and mild flavor.", img: "ettingerAvocado.jpeg" },
    { name: "Fuerte", desc: "Pear-shaped and oily texture similar to that of a hazelnut.", img: "fuerteAvocado.jpeg" },
    { name: "Gwen", desc: "Similar to Hass but has a thick, dark green skin.", img: "gwenAvocado.jpeg" },
    { name: "Hass", desc: "The most popular type, available year-round.", img: "hassAvocado.jpeg" },
    { name: "Lula", desc: "Peaks in summertime and is resistant to cold but susceptible to fungi.", img: "lulaAvocado.jpeg" },
    { name: "Maluma", desc: "Dark purple avocado discovered in South Africa.", img: "malumaAvocado.jpeg" },
    { name: "Monroe", desc: "Firmer and can weigh over 2 pounds.", img: "monroeAvocado.jpeg" },
    { name: "Pinkerton", desc: "Oblong shape with rough skin that is easy to peel.", img: "pinkertonAvocado.jpeg" },
    { name: "Reed", desc: "Only available in summer, and skin remains green.", img: "reedAvocado.jpeg" },
    { name: "Sharwil", desc: "Rough, green peel, yellow flesh, and very oily.", img: "sharwilAvocado.jpeg" },
    { name: "Zutano", desc: "Lighter, yellow-green skin and mild, more buttery taste.", img: "zutanoAvocado.jpeg" },
    { name: "Floria", desc: "Big boi.", img: "floridaAvocado.jpeg" }
];

const TypesOfAvocadoPage = () => {
    return (
        <>
            <Navbar />
            <div className="avocado-container">
                <h1>Types of Avocado</h1>
                <div className="avocado-grid">
                  {avocadoTypes.map((avocado, index) => (
                    <div key={index} className="avocado-item">
                      <h3>{avocado.name}</h3>
                      <div className="image-container">
                        <img src={require(`../images/${avocado.img}`)} alt={avocado.name} />
                      </div>
                      <div className="description">
                        <p>{avocado.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </>
    );
};

export default TypesOfAvocadoPage;
