import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductDisplay';
import Modal from '../components/Modal';
import { useUserContext } from '../contexts/UserContext';

import './Home.css';

const Home = ({ setCartItems }) => {
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const { profile } = useUserContext(); 

  useEffect(() => {
    if (profile) {
      setCountry(profile.country);
      setGender(profile.gender);
    }
  }, [profile]);

  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      let updatedItems = [];
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }
      sessionStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="Home">
      <Hero />
      <ProductDisplay addToCart={addToCart} showModal={showModal} closeModal={closeModal} number={2} country={country} gender={gender} />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
