import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ onClick, className, activeClassName, buttonClass }) => {
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
            <NavLink
                to="/blog/new"
                className={buttonClass}
                exact={true}
                onClick={onClick}
            >
                Add blog
            </NavLink>
        </>
    )
}

export default MenuItems
