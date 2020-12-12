import React from 'react'
import FormCountryOptions from './FormCountryOptions'
import { useForm } from 'react-hook-form'

const Form = ({ onSubmit, preloadedValues }) => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: preloadedValues
    })
    console.error(errors)

    return (
        <form
            className="form-wrapper"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-flex-container">
                <div className="form-input-first">
                    <label htmlFor="city" className="form-label">
                        City:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="city"
                        ref={register({ required: true, maxLength: 50 })}
                    />
                </div>
                <div className="form-input-second">
                    <label htmlFor="country" className="form-label">
                        Country:
                    </label>
                    <select
                        className="form-input"
                        name="country"
                        ref={register({ required: true })}
                    >
                        <FormCountryOptions />
                    </select>
                </div>
            </div>
            <div className="form-flex-container">
                <div className="form-input-first">
                    <label htmlFor="date_visited" className="form-label">
                        Date of visit:
                    </label>
                    <input
                        className="form-input"
                        type="date"
                        name="date_visited"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="form-input-second">
                    <label htmlFor="place_img" className="form-label">
                        Image path/URL of place:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="/images/places/filename"
                        name="place_img"
                        ref={register({ required: true })}
                    />
                </div>
            </div>
            <div className="form-flex-container">
                <div className="form-input-first">
                    <label htmlFor="author" className="form-label">
                        Author:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="author"
                        ref={register({
                            required: true,
                            minLength: 5,
                            maxLength: 30,
                        })}
                    />
                </div>
                <div className="form-input-second">
                    <label htmlFor="author_img" className="form-label">
                        Image path/URL of author:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="/images/images/filename"
                        name="author_img"
                        ref={register({ required: true })}
                    />
                </div>
            </div>
            <div className="form-container">
                <div className="form-container-input">
                    <label htmlFor="title" className="form-label">
                        Blog title:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Some awesome title"
                        name="title"
                        ref={register({ required: true })}
                    />
                </div>
            </div>
            <div className="form-container">
                <div className="form-container-input">
                    <label htmlFor="blog_text" className="form-label">
                        Blog text:
                    </label>
                    <textarea
                        className="form-input form-textarea"
                        name="blog_text"
                        ref={register({ required: true, minLength: 50 })}
                    />
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

export default Form
