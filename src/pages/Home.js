import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='relative'>
      <img
        className='hero-image'
        src='/images/places/voss.jpg'
        alt="Gullible's Travels Home"
      />
      <div className='hero-overlay'>
        <div className='hero-text'>
          <h1 className='hero-text-header'>
            Gullible's Travels{' '}
            <span className='hero-header-span'>Adventure Starts Here</span>
          </h1>
          <div className='hero-cta-container'>
            <NavLink className='cta-hero' to='/blog'>
              Blog
            </NavLink>
            <NavLink className='cta-hero' to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
