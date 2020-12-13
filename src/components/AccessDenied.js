import React from 'react'
import { NavLink } from 'react-router-dom'

const AccessDenied = () => {
    return (
        <>
            <div className="error-container">
                <h2 className="error-header-text">Acces denied</h2>
                <div className="mx-auto mb-10">
                    <img
                        className="error-image"
                        src="/images/error/gandalf-errorpage.png"
                        alt="You shall not pass!"
                    />
                </div>
                <NavLink to="/" className="cta-button">
                    Home
                </NavLink>
            </div>
        </>
    )
}

export default AccessDenied
