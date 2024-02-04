
// Store.js
import React, { useEffect, useState } from 'react';
import ProductDisplay from '../components/ProductDisplay';
import Modal from '../components/Modal';
import { useUserContext } from '../contexts/UserContext';

import './Store.css';

const Store = ({ setCartItems }) => {
  const [country, setCountry] = useState('USA');
  const [gender, setGender] = useState('female');
  const { profile } = useUserContext();
  const [showModal, setShowModal] = useState('');

  useEffect(() => {
    if (profile) {
      console.log('Profile:', profile);
      setCountry(profile.country);
      setGender(profile.gender);
    }
  }, [profile]);

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
    <div className="Store">
      <div className='store-header'>
        <div className='country-selector'>
          <label>Country:</label>
          <select onChange={(ev) => setCountry(ev.target.value)} value={country}>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className='gender-selector'>
          <label>Gender:</label>
          <select onChange={(ev) => setGender(ev.target.value)} value={gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <ProductDisplay
        addToCart={addToCart}
        showModal={showModal}
        closeModal={closeModal}
        number={15}
        country={country}
        gender={gender}
        setCountry={setCountry} // Pass setCountry as a prop
        setGender={setGender}   // Pass setGender as a prop
      />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Store;
