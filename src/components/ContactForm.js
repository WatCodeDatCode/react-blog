import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
    })

    return (
        <form id="contact-form" className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-flex-container">
                <div className="form-input-first">
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        ref={register({
                            required: 'Please enter your name',
                            maxLength: {
                                value: 50,
                                message: 'Max length is 50',
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="form-error-message">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="form-input-second">
                    <input
                        className="form-input"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        ref={register({ required: 'Please enter your email' })}
                    />

                    {errors.email && (
                        <p className="form-error-message">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="form-container">
                <div className="form-container-input">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        ref={register({ required: 'Please enter a title' })}
                    />
                    {errors.subject && (
                        <p className="form-error-message">
                            {errors.subject.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="form-container">
                <div className="form-container-input">
                    <textarea
                        className="form-input form-textarea"
                        name="message"
                        placeholder="Your message"
                        ref={register({
                            required: 'Please enter a blog text',
                            minLength: {
                                value: 50,
                                message: 'Minimum of 50 characters required',
                            },
                        })}
                    />
                    {errors.message && (
                        <p className="form-error-message">
                            {errors.message.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex-justify">
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm
