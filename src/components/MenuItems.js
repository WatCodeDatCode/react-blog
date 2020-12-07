import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ onClick }) => {
    return (
        <>
            <NavLink
                to="/"
                className="nav-inactive"
                activeClassName="nav-active"
                exact={true}
                onClick={onClick}
            >
                Home
            </NavLink>
            <NavLink
                to="/blog"
                className="nav-inactive"
                activeClassName="nav-active text-primary-500"
                exact={true}
                onClick={onClick}
            >
                Blog
            </NavLink>
            <NavLink
                to="/contact"
                className="nav-inactive"
                activeClassName="nav-active"
                onClick={onClick}
            >
                Contact
            </NavLink>
            <NavLink
                to="/blog/new"
                className="nav-inactive"
                activeClassName="nav-active"
                exact={true}
                onClick={onClick}
            >
                Add blog
            </NavLink>
        </>
    )
}

export default MenuItems
