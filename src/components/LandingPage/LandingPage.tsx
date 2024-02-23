import React, { useState, useContext, useEffect } from 'react';
import Hero from 'src/components/Hero/Hero';
import ProductDisplay from 'src/components/ProductDisplay/ProductDisplay';
import Modal from 'src/components/Modal/Modal';
import { useFetchUserInfoQuery } from 'src/lib/hooks/use-fetch-user-info-query';
import CartContext from 'src/context/CartContext';
import SocialProof from 'src/components/SocialProof/SocialProof';

const LandingPage = () => {
  const { addToCart } = useContext(CartContext);
  const [country, setCountry] = useState('USA');
  const [gender, setGender] = useState('female');
  const [showModal, setShowModal] = useState(false);
  
  const { data, error, isLoading } = useFetchUserInfoQuery();

  useEffect(() => {
    if (data && data.user) {
      setCountry(data.user.country || 'USA');
      setGender(data.user.gender || 'female');
    }
  }, [data]);

  const handleAddToCart = (product : any) => {
    addToCart(product);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="LandingPage">
      <Hero />
      <ProductDisplay 
        addToCart={handleAddToCart}
        number={4}
        country={country} 
        gender={gender} 
      />
      {showModal && <Modal closeModal={closeModal} />}
      <SocialProof />
    </div>
  );
};

export default LandingPage;


