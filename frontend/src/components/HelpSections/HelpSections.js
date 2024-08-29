
import React, { useEffect, useState } from 'react';
import './HelpSections.css';



const HelpSections = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/api/products') 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="help-sections">
      {products.map((section, index) => (
        <div key={index} className="help-card">
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpSections;



