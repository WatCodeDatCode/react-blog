import React, { useState } from 'react'
import { ContactForm, LoginError, LoadingSpinner } from '../componentExports'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [enteredData, setEnteredData] = useState('')

    const onSubmit = async (data) => {
        const form = document.querySelector('#contact-form')
        setEnteredData(data)
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
                    setEnteredData('')
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
                <div className="flex h-auto justify-center mx-6 mb-8 pt-2 w-full relative md:w-2/3 xl:w-2/4">
                    <img
                        className="blog-image"
                        src="/images/andrew-contact.jpg"
                        alt="Contact Andrew Russell"
                    />
                    <div className="image-overlay">
                        <div className="contact-image-text">
                            <h3 className="image-contact-info">
                                Email
                            </h3>
                            <p className="image-contact-details">
                                arussell742<span className="mx-1">@</span>
                                gmail.com
                            </p>
                            <h3 className="mt-1 md:mt-6 image-contact-info">
                                Address
                            </h3>
                            <div className="image-contact-details">
                                <p>Andrew Russell</p>
                                <p>Diekmoorweg 20</p>
                                <p>22419 Hamburg</p>
                                <p>Germany</p>
                            </div>
                            <h3 className="mt-1 md:mt-6 image-contact-info">
                                Phone
                            </h3>
                            <p className="image-contact-details">
                                +49 1522 7970969
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-body-container">
                    <div className="mx-4">
                        <p>
                            "This blog was bootstrapped with Create-React-App"
                            and done by your friendly neighborhood Beardyman,
                            Andrew Russell, as a final project for the{' '}
                            <a
                                href="https://hamburgcodingschool.com/en/fullstackprogram/"
                                className="text-secondary-500 italic font-bold"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Full-Stack-Web-Development program
                            </a>{' '}
                            at{' '}
                            <a
                                className="text-primary-500 font-bold"
                                href="https://hamburgcodingschool.com/en/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Hamburg Coding School
                            </a>
                            .
                        </p>
                        <p className="mt-6">
                            If you have any questions, feedback, or just want to
                            set up an appointment to play with my beard, feel
                            free to use the contact form below.
                        </p>
                        <p className="mt-6">
                            Find any bugs or have suggestions for improving this
                            site? Feel free to open an issue on the{' '}
                            <a
                                className="text-secondary-500"
                                href="https://github.com/WatCodeDatCode/react-blog"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github repo.
                            </a>
                        </p>
                    </div>
                </div>
                {loading || error ? (
                    loading ? (
                        <div className="min-h-50vh">
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
                    <ContactForm
                        onSubmit={onSubmit}
                        preloadedValues={enteredData ? enteredData : ''}
                    />
                ) : (
                    <div className="my-10">
                        <p className="loader-container success-message">
                            Message sent!
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contact
