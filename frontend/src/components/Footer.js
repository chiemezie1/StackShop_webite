import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>StackShop</h3>
          <p>Your one-stop shop for quality products</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: chiemezieagbo1@gmail.com</p>
          <p>Email: https://github.com/chiemezie1</p>
          <p>Phone: +234 803 123 4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
