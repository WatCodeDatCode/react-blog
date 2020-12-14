import React from 'react';
import MenuItems from './MenuItems';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href='/' className='footer-logo-anchor'>
          <img src='/images/logo_marker.png' alt="Gullible's Travels Logo" />
        </a>
        <MenuItems
          className='footer-nav-inactive'
          activeClassName='footer-nav-active'
          buttonClass='footer-nav-button'
        />
      </div>
    </div>
  );
};

export default Footer;
