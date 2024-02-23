import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import ConfirmationModal from 'src/components/ConfirmationModal/ConfirmationModal';
import { useFetchUserInfoQuery } from 'src/lib/hooks/use-fetch-user-info-query';
import CartContext from 'src/context/CartContext';

const Checkout = () => {

  const { clearCart  } = useContext(CartContext);
  const { data, error, isLoading } = useFetchUserInfoQuery();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: ''
  });
  const router = useRouter();

  useEffect(() => {
    if (data && data.user) {
      setUserData({
        firstName: data.user.givenName || 'name',
        lastName: data.user.familyName || 'surname',
        email: data.user.email || 'email',
        phone: data.user.phoneNumber || 'phone',
        address: data.user.streetAddress || 'address',
        postalCode: data.user.postalCode || 'postalCode',
        city: data.user.locality || 'locality',
        country: data.user.country || 'country'
      });
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    clearCart();
    router.push('/');
  };

  return (
    <div className="flex justify-center mx-auto items-center min-h-screen bg-gray-100" style={{ maxWidth: '1200px', padding: '0 0' }}>
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-2xl w-full -mt-32">
        <h2 className="text-3xl font-semibold mb-8">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={userData.address}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-lg font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={userData.postalCode}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={userData.city}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-lg font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={userData.country}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
            Submit Order
          </button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>

  );
};

export default Checkout;
