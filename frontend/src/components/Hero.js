import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../public/images/hero1.jpg';

import './Hero.css';

const Hero = () => {
    return (
        <div className="Hero">
            <div className="HeroContent">
                <h2>Welcome to StackShop</h2>
                <img src={HeroImage} alt="Storefront" className="HeroImage" />
                <div className="HeroText">
                    <p>Discover amazing products and enjoy a seamless shopping experience with StackShop.</p>
                    <Link to="/store" className="HeroButton">Explore Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;