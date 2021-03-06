import React from 'react';

const MobileMenu = ({ onClick, mobileMenuIsOpen }) => {
  return (
    <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
      <button
        className='inline-flex items-center justify-center p-2 rounded-md text-dark-800 hover:text-white hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-inset-2 focus:ring-white'
        aria-expanded='false'
        onClick={onClick}
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className={`${mobileMenuIsOpen ? 'hidden' : 'block'} h-6 w-6`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        <svg
          className={`${mobileMenuIsOpen ? 'block' : 'hidden'} h-6 w-6`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenu;
