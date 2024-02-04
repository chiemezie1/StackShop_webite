import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { useUserContext } from '../contexts/UserContext';

const Cart = ({ cartItems }) => {
  const { profile } = useUserContext();
  const [birthdate, setBirthdate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      setBirthdate(profile.birthdate);
    }
  }, [profile]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const checkforbirthdate = () => {
    const today = new Date();
    const userBirthdate = new Date(birthdate);
    return today.getMonth() === userBirthdate.getMonth() && today.getDate() === userBirthdate.getDate();
  };

  const calculatebirthdateprice = () => {
    const price = getTotalPrice();
    return checkforbirthdate() ? price * (10 / 100) : 0;
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="4">Your cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.imageUrl} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <div>{checkforbirthdate() ? <div>Congratulations, it's your birthday! 10% off</div> : null}</div>
      <tfoot>
        <tr>
          <td colSpan="3">Total</td>
          <td>${getTotalPrice()}</td>
          <td>${calculatebirthdateprice()}</td>
        </tr>
      </tfoot>
      <button onClick={goToCheckout} disabled={cartItems.length === 0}>
        Go to Checkout
      </button>
    </div>
  );
};

export default Cart;
