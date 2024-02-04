// AboutUs.js

import React from 'react';
import './AboutUs.css';
import image2 from '../images/hero2.jpg';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="about-content">
        <h2>Welcome to StackShop!</h2>
        <div className="about-images">
          <img src={image2} alt="About Us 2" />
        </div>
        <p>
          At StackShop, we are passionate about delivering high-quality products that cater to your needs.
          Our journey began with a vision to create a seamless shopping experience, offering a diverse range
          of products to customers around the world.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to provide you with the best shopping experience possible. We strive to offer a
          carefully curated selection of products, ensuring that each item meets our standards of quality and
          style.
        </p>

        <h3>What Sets Us Apart</h3>
        <p>
          StackShop stands out through its commitment to customer satisfaction, attention to detail, and
          dedication to providing a variety of products suitable for every taste and preference.
        </p>

        <h3>Join Us on the Journey</h3>
        <p>
          We invite you to explore our online store and discover the latest trends, exclusive deals, and
          unique finds. Your satisfaction is our priority, and we are here to make your shopping experience
          enjoyable and hassle-free.
        </p>

        <h3>Contact Us</h3>
        <p>
          Have questions or suggestions? Feel free to reach out to our friendly customer support team. We
          value your feedback and are here to assist you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
