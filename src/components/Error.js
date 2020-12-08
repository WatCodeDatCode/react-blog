import React from 'react'

const Error = ({ error }) => {
    return (
        <div className="h-screen w-full flex flex-col justify-center content-between">
            <div className="mx-auto">
                <img
                    className="h-auto"
                    src="/images/error/gandalf-errorpage.png"
                    alt="You shall not pass!"
                />
            </div>
            <br></br>
            <p className="text-center mx-24 font-nationalPark text-4xl m-16">
                {error}
            </p>
        </div>
    )
}

export default Error
