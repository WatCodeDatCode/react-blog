import React, { useRef, useContext, useState } from 'react';
import {
  MenuItems,
  MobileMenu,
  SignInForm,
  AuthContext
} from '../componentExports.js';
import useOutsideClick from '../useOutsideClick';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false);

  const { token, handleLogout } = useContext(AuthContext);

  const handleMobileMenuClick = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  const handleUserClick = () => {
    setUserDropdownIsOpen(!userDropdownIsOpen);
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (userDropdownIsOpen) setUserDropdownIsOpen(false);
  });

  return (
    <div className='sticky-nav'>
      <div className='header'>
        <div className='header-desktop-container'>
          <div className='header-nav-container'>
            <MobileMenu onClick={handleMobileMenuClick} />
            <div className='header-company-container'>
              <a href='/' className='header-company-anchor'>
                <img
                  className='header-company-logo'
                  src='/images/logo_without_text.png'
                  alt="Gullible's Travels Logo"
                />
                <h2 className='header-company-name'>Gullible's Travels</h2>
              </a>
            </div>
            <div className='flex'>
              <div className='desktop-nav-container'>
                <div className='flex'>
                  <MenuItems
                    activeClassName='desktop-nav-active'
                    className='desktop-nav-inactive'
                    buttonClass='nav-button'
                  />
                </div>
              </div>
            </div>
            <div className='user-nav-container'>
              <div className='user-menu-container'>
                <div>
                  <button
                    className='user-button'
                    id='user-menu'
                    aria-haspopup='true'
                    onClick={handleUserClick}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <svg
                      className='user-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    userDropdownIsOpen
                      ? token
                        ? 'block, user-menu-logged-in'
                        : 'block, user-menu'
                      : 'hidden'
                  }`}
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                  ref={ref}
                >
                  {!token ? (
                    <SignInForm />
                  ) : (
                    <div className='my-3 mx-3 float-right'>
                      <NavLink to='/' className='user-menu-item'>
                        My profile
                      </NavLink>

                      <button className='cta-button' onClick={handleLogout}>
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${mobileMenuIsOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='mobile-nav-container'>
            <MenuItems
              onClick={handleMobileMenuClick}
              activeClassName='mobile-nav-active'
              className='mobile-nav-inactive'
              buttonClass='mobile-nav-button'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
