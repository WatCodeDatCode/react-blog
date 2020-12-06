import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="h-auto py-8 bg-dark-900">
            <div class="flex justify-center">
                <NavLink
                    to="/"
                    className="nav-inactive"
                    activeClassName="nav-active"
                    exact={true}
                >
                    <img
                        class="h-16 lg:h-24 mb-3"
                        src="/images/logo_marker.png"
                        alt="Gullible's Travels Logo"
                    />
                </NavLink>
            </div>
            <div class="flex justify-center">
                <NavLink
                    to="/blog"
                    className="nav-inactive"
                    activeClassName="nav-active"
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/contact"
                    className="nav-inactive"
                    activeClassName="nav-active"
                >
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Footer
