import React from 'react'
import MenuItems from './MenuItems'

const Footer = () => {
    return (
        <div className="h-auto py-8 bg-dark-900">
            <div className="flex flex-col text-center">
                <a href="/"
                    className="w-16 lg:w-24 mb-6 rounded-full hover:shadow-orangeXL mx-auto"
                >
                    <img
                        src="/images/logo_marker.png"
                        alt="Gullible's Travels Logo"
                    />
                </a>
                <MenuItems className="footer-nav-inactive"
                activeClassName="footer-nav-active"
                buttonClass="footer-nav-button" 
                />
            </div>
        </div>
    )
}

export default Footer
