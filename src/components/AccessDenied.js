import React from 'react'
import { NavLink } from 'react-router-dom'

const AccessDenied = () => {
    return (
        <>
            <div className="error-container">
                <h2 className="error-header-text">Acces denied</h2>
                <NavLink to="/" className="cta-button">
                    Home
                </NavLink>
            </div>
        </>
    )
}

export default AccessDenied
