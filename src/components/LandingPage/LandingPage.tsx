import React, { useState, useEffect } from 'react';
import Hero from 'src/components/Hero/Hero';
import ProductDisplay from 'src/components/ProductDisplay/ProductDisplay';
import Modal from 'src/components/Modal/Modal';
import { useFetchUserInfoQuery } from 'src/lib/hooks/use-fetch-user-info-query';
import { useCart } from 'src/context/CartContext';
import SocialProof from 'src/components/SocialProof/SocialProof';
import { Product } from 'src/types/types'; 

const LandingPage: React.FC = () => {
  const { addToCart } = useCart();
  const [country, setCountry] = useState<string>('USA');
  const [gender, setGender] = useState<string>('female');
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const { data, error, isLoading } = useFetchUserInfoQuery();

  useEffect(() => {
    if (data && data.user) {
      setCountry(data.user.country || 'USA');
      setGender(data.user.gender || 'female');
    }
  }, [data]);

  const handleAddToCart = (product: Product) => {
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
