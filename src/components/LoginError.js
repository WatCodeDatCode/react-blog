import React from 'react'

const LoginError = ({ error, buttonText, onClick }) => {
    return (
        <div className="login-error-container">
            <p className="error-text">{error}</p>
            <button onClick={onClick} className="cta-button">
                {buttonText}
            </button>
        </div>
    )
}

export default LoginError
