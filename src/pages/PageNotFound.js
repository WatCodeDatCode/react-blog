import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="h-90vh">
            <div className="error-container">
                <p className="error-header-text">404 - Page Not Found</p>
                <div className="mx-auto">
                    <img
                        className="error-image"
                        src="/images/error/confused-cat.gif"
                        alt="You shall not pass!"
                    />
                </div>
                <p className="error-text">
                    It appears your cat walked over your keyboard.
                </p>
                <NavLink to="/" className="cta-button">
                    Return home
                </NavLink>
            </div>
        </div>
    )
}

export default PageNotFound
