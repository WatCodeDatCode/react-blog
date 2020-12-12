import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from './AuthContext'

const MenuItems = ({ onClick, className, activeClassName, buttonClass }) => {
    const { token } = useContext(AuthContext)
    return (
        <>
            <NavLink
                to="/"
                className={className}
                activeClassName={activeClassName}
                exact={true}
                onClick={onClick}
            >
                Home
            </NavLink>
            <NavLink
                to="/blog"
                className={className}
                activeClassName={activeClassName}
                exact={true}
                onClick={onClick}
            >
                Blog
            </NavLink>
            <NavLink
                to="/contact"
                className={className}
                activeClassName={activeClassName}
                onClick={onClick}
            >
                Contact
            </NavLink>
            {token && (
                <NavLink
                    to="/blog/new"
                    className={buttonClass}
                    exact={true}
                    onClick={onClick}
                >
                    Add blog
                </NavLink>
            )}
        </>
    )
}

export default MenuItems
