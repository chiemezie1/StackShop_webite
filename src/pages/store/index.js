import React, { useState, useContext, useEffect } from 'react';
import ProductDisplay from 'src/components/ProductDisplay/ProductDisplay';
import Modal from 'src/components/Modal/Modal';
import { useFetchUserInfoQuery } from 'src/lib/hooks/use-fetch-user-info-query';
import CartContext from 'src/context/CartContext';

const Store = () => {
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState('USA');
  const [gender, setGender] = useState('female');
  const { data, error, isLoading } = useFetchUserInfoQuery();

  useEffect(() => {
    if (data && data.user) {
      setCountry(data.user.country || 'USA');
      setGender(data.user.gender || 'female');
    }
  }, [data]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen mx-auto bg-gray-100 p-10" style={{ maxWidth: '1200px' }}>
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between mb-6">
          <div className="flex items-center space-x-3">
            <label className="text-gray-700 font-semibold">Country:</label>
            <select
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <option value="USA">USA</option>
              <option value="China">China</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <label className="text-gray-700 font-semibold">Gender:</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <ProductDisplay 
          addToCart={handleAddToCart}
          number={4}
          country={country} 
          gender={gender} 
        />
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Store;
