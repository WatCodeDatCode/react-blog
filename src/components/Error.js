import React from 'react'

const Error = ({ error, buttonText, onClick }) => {
    return (
        <div className="h-screen w-full flex flex-col justify-center content-between">
            <div className="mx-auto">
                <img
                    className="h-40vh lg:h-50vh w-auto"
                    src="/images/error/gandalf-errorpage.png"
                    alt="You shall not pass!"
                />
            </div>
            <p className="text-center mx-10 font-nationalPark text-4xl m-10">
                {error}
            </p>
            <button onClick={onClick} className=" w-24 mx-auto font-nationalPark px-1 py-1 tracking-wide text-lg bg-primary-500 hover:bg-secondary-500 hover:shadow-orange focus:ring-offset-2 focus:ring-white text-dark-900 hover:text-white">
                {buttonText}
            </button>
        </div>
    )
}

export default Error
