import React from 'react';

const Error = ({ error, buttonText, onClick }) => {
  return (
    <div className='error-container'>
      <div className='mx-auto'>
        <img
          className='error-image'
          src='/images/error/gandalf-errorpage.png'
          alt='You shall not pass!'
        />
      </div>
      <p className='error-text'>{error}</p>
      <button onClick={onClick} className='cta-button'>
        {buttonText}
      </button>
    </div>
  );
};

export default Error;
