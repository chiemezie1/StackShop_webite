import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import AboutUs from './pages/AboutUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showModal, setShowModal] = useState(false);



  const clearCart = () => {
    setCartItems([]);
  };

  const closeModal = () => setShowModal(false);

  return (
   
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home
              setCartItems={setCartItems}
              showModal={showModal}
              closeModal={closeModal}
            />
            }
            />
            <Route path="/store" element={<Store
              setCartItems={setCartItems}
              showModal={showModal}
              closeModal={closeModal}
            />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/checkout" element={<Checkout clearCart={clearCart} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    
  );
}

export default App;
