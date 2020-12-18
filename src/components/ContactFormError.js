import React from 'react';

const ContactFormError = ({ error, buttonText, onClick }) => {
  return (
    <div className='login-error-container'>
      <p className='error-text'>{error}</p>
      <button onClick={onClick} className='cta-button'>
        {buttonText}
      </button>
    </div>
  );
};

export default ContactFormError;
