import React from 'react'

const Error = ({ error }) => {
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
        </div>
    )
}

export default Error
