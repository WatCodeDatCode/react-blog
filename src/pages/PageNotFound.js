import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {

    return (
        <div className="h-screen w-full flex flex-col justify-center content-between">
            <p className="text-primary-500 text-center font-nationalPark text-6xl mb-10">404 - Page Not Found</p>
            <div className="mx-auto">
                <img
                    className="h-50vh lg:h-50vh w-auto"
                    src="/images/error/confused-cat.gif"
                    alt="You shall not pass!"
                />
            </div>
            <p className="text-center font-nationalPark text-4xl m-10">
                It appears your cat walked over your keyboard.
            </p>
            <NavLink to='/'
                
                className=" w-32 mx-auto font-nationalPark px-1 py-1 tracking-wide text-lg bg-primary-500 hover:bg-secondary-500 hover:shadow-orange focus:ring-offset-2 focus:ring-white text-dark-900 hover:text-white"
            >
                Return home
            </NavLink>
        </div>
    )
}

export default PageNotFound
