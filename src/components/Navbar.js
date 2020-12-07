import React, { useEffect, useState } from 'react'
import MenuItems from './MenuItems'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false)

    const handleMobileMenuClick = () => {
        setMobileMenuIsOpen(!mobileMenuIsOpen)
    }

    const handleUserClick = () => {
        setUserDropdownIsOpen(!userDropdownIsOpen)
    }

    useEffect(() => {})

    return (
        <div className="bg-secondary-500 py-2 md:py-3">
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <MobileMenu onClick={handleMobileMenuClick} />
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <a href="/" className="flex-shrink-0 flex items-center">
                            <img
                                className="h-12 md:h-16 hover:shadow-yellowXL rounded-full"
                                src="/images/logo_without_text.png"
                                alt="Gullible's Travels Logo"
                            />
                            <h2 className="hidden md:block ml-3 mr-8 md:text-3xl lg:text-4xl font-nationalPark font-extrabold tracking-wider hover:text-primary-500">
                                Gullible's Travels
                            </h2>
                        </a>
                    </div>
                    <div className="flex">
                        <div className="hidden md:block md:ml-4 h-full">
                            <div className="flex">
                                <MenuItems activeClassName="desktop-nav-active" className="desktop-nav-inactive" buttonClass="nav-button" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <div className="ml-3 relative">
                            <div>
                                <button
                                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    onClick={handleUserClick}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <svg
                                        className="h-10 w-10 text-dark-800 hover:text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={`${
                                    userDropdownIsOpen ? 'block' : 'hidden'
                                } z-10 origin-top-right absolute right-0 mt-1 w-48 rounded-md py-1 bg-dark-800 ring-1 shadow-yellowXL ring-black ring-opacity-5`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-dark-500"
                                    role="menuitem"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-dark-500"
                                    role="menuitem"
                                >
                                    Settings
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-dark-500"
                                    role="menuitem"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${mobileMenuIsOpen ? 'block' : 'hidden'} md:hidden`}
            >
                <div className="flex flex-col px-2 pt-2 pb-3">
                    <MenuItems onClick={handleMobileMenuClick} activeClassName="mobile-nav-active" className="mobile-nav-inactive" buttonClass="mobile-nav-button"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
