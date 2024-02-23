import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductDisplay';
import Modal from '../components/Modal';
import { useUserContext } from '../contexts/UserContext';

import './Home.css';

const LandingPage: FC =  ({ setCartItems }) => {
  const [country, setCountry] = useState('USA');
  const [gender, setGender] = useState('female');
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

export default LandingPage;



const AnotherComponent = () => {
  // Using the useFetchUserInfoQuery hook

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access user information from data
  const { user } = data;

  console.log('User Object:', user); // Log the user object to the console

  // Render your component with user information
  return (
    <div>
      <h2>User Information</h2>
      <p>Email: {user?.email || 'N/A'}</p>
      <p>Country: {user?.country || 'N/A'}</p>
      <p>Given Name: {user?.givenName || 'N/A'}</p>
      <p>Family Name: {user?.familyName || 'N/A'}</p>
      <p>Phone Number: {user?.phoneNumber || 'N/A'}</p>
      <p>Postal Code: {user?.postalCode || 'N/A'}</p>
      <p>Street Address: {user?.streetAddress || 'N/A'}</p>
      <p>Locality: {user?.locality || 'N/A'}</p>
      <p>Birthdate: {user?.birthdate || 'N/A'}</p>
    

      {/* Other user details can be accessed similarly */}
    </div>
  );
};

export default AnotherComponent;
