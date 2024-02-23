import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CartContext from 'src/context/CartContext'; // Ensure this path matches your file structure
import { useFetchUserInfoQuery } from 'src/lib/hooks/use-fetch-user-info-query';
import * as images from 'src/utils/index';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { data, error, isLoading } = useFetchUserInfoQuery();
  const [birthdate, setBirthdate] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (data?.user) {
      setBirthdate(data.user.birthdate || '');
    }
  }, [data?.user]);

  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  const checkForBirthdate = () => {
    const today = new Date();
    const userBirthdate = new Date(birthdate);
    return today.getMonth() === userBirthdate.getMonth() && today.getDate() === userBirthdate.getDate();
  };

  const calculateBirthdatePrice = () => checkForBirthdate() ? getTotalPrice() * 0.1 : 0;

  const goToCheckout = () => router.push('/checkout');

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error.message}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen mx-auto bg-gray-100" style={{ maxWidth: '1200px', padding: '0 0' }}>
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-4xl w-full -mt-32">
        <h2 className="text-4xl font-bold mb-8 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center text-lg text-gray-500">Your cart is empty.</div>
        ) : (
          <>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-2xl font-bold text-gray-700 uppercase tracking-wider">Product</th>
                  <th scope="col" className="px-6 py-3 text-left text-2xl font-bold text-gray-700 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-2xl font-bold text-gray-700 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-2xl font-bold text-gray-700 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item: any) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-14 w-14">
                          <Image
                            src={images[item.name]?.src || ''}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="object-center rounded-full"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-2xl text-gray-500">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-2xl text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-2xl text-gray-500">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex justify-between items-center">
              <div>
                {checkForBirthdate() && <p className="text-xl font-semibold text-green-600">Birthday Discount Applied: 10% off</p>}
              </div>
              <div className="text-xl font-semibold">Total: ${getTotalPrice() - calculateBirthdatePrice()}</div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={goToCheckout}
                disabled={cartItems.length === 0}
                className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                Go to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default Cart;
