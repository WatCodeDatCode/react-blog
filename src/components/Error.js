import React from 'react'

const Error = ({ error }) => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-4xl">Uh oh! It seems we have a problem:</div>
            <p>{error}</p>
        </div>
    )
}

export default Error
