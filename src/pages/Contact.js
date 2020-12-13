import React, { useState } from 'react'
import { ContactForm, LoginError, LoadingSpinner } from '../componentExports'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = async () => {
        const form = document.querySelector('#contact-form')
        setLoading(true)

        await emailjs
            .sendForm(
                process.env.REACT_APP_FORM_SERVICE,
                process.env.REACT_APP_FORM_TEMPLATE,
                form,
                process.env.REACT_APP_FORM_KEY
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setSuccess(true)
                },
                (error) => {
                    console.log(error.text)
                    setError(error.text)
                }
            )
        setLoading(false)
    }

    const handleRemoveErrorButton = () => {
        setError(false)
    }

    return (
        <>
            <div className="form-page-container">
                <h2 className="page-header">Contact</h2>
                {loading || error ? (
                    loading ? (
                        <div className=" min-h-50vh">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <div className="min-h-50vh">
                            <LoginError
                                error={error}
                                buttonText="Go back"
                                onClick={handleRemoveErrorButton}
                            />
                        </div>
                    )
                ) : !success ? (
                    <ContactForm onSubmit={onSubmit} />
                ) : (
                    <div className="my-10">
                        <p className="loader-container text-green-500 font-nationalPark text-3xl font-bold">Message sent!</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contact
