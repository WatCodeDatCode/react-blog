import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="relative">
            <img
                className="hero-image object-cover opacity-80"
                src="/images/hero.jpg"
                alt="Gullible's Travels Home"
            />
            <div className="hero-overlay">
                <div className="hero-text">
                    <h1 className="text-primary-500 text-5xl md:text-6xl lg:text-7xl font-extrabold">Gullible's Travels <span className="text-secondary-500 text-3xl md:text-4xl font-bold block mt-6">Adventure Starts Here</span></h1>
                    <div className="flex  mt-16 justify-between content-center text-4xl">
                        <div className="">
                            <NavLink className="cta-hero" to="/blog">Blog</NavLink>
                        </div>
                        <div className="">
                            <NavLink className="cta-hero" to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
