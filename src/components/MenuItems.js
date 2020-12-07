import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItems = () => {
    return (
        <>
            <NavLink
                to="/"
                className="nav-inactive"
                activeClassName="nav-active"
                exact={true}
            >
                Home
            </NavLink>
            <NavLink
                to="/blog"
                className="nav-inactive"
                activeClassName="nav-active text-primary-500"
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
            <NavLink
                to="/blog/new"
                className="nav-inactive"
                activeClassName="nav-active"
            >
                Add blog
            </NavLink>
        </>
    )
}

export default MenuItems
