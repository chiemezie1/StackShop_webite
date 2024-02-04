// src/components/ProductDisplay.js

import React, { useEffect, useState } from 'react';
import generateProducts from '../utils/GenerateProducts.js';
import './ProductDisplay.css';
import Modal from './Modal';

// Import all images from the 'images' directory
import * as images from '../images/index.js';

const ProductDisplay = ({ addToCart, number, gender, country, showModal, closeModal }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const generatedProducts = generateProducts(number, gender, country);
    setProducts(generatedProducts);
  }, [number, gender, country]);

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          {/* Use the imported images dynamically based on the product */}
          <img src={images[product.name]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ProductDisplay;
