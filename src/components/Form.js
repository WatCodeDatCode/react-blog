import React from 'react'
import FormCountryOptions from './FormCountryOptions'
import { useForm } from 'react-hook-form'

const Form = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm()
    console.error(errors)

    return (
        <form className="mx-6 mb-10 pt-2 w-full md:w-2/3 xl:w-2/4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="city_input" className="form-label">
                        City:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                       
                        name="city_input"
                        ref={register({ required: true, maxLength: 50 })}
                    />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                    <label htmlFor="country_input" className="form-label">
                        Country:
                    </label>
                    <select
                        className="form-input"
                        name="country_input"
                        ref={register({ required: true })}
                    >
                        <FormCountryOptions />
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="date_visited_input" className="form-label">
                        Date of visit:
                    </label>
                    <input
                        className="form-input"
                        type="date"
                        name="date_visited_input"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                    <label htmlFor="place_img_input" className="form-label">
                        Image path/URL of place:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="/images/places/filename"
                        name="place_img_input"
                        ref={register({ required: true })}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="author_input" className="form-label">
                        Author:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="author_input"
                        ref={register({
                            required: true,
                            minLength: 5,
                            maxLength: 30,
                        })}
                    />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                    <label htmlFor="author_img_input" className="form-label">
                        Image path/URL of author:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="/images/images/filename"
                        name="author_img_input"
                        ref={register({ required: true })}
                    />
                </div>
            </div>

            <div className="-mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                    <label htmlFor="blog_title_input" className="form-label">
                        Blog title:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Some awesome title"
                        name="blog_title_input"
                        ref={register({ required: true })}
                    />
                </div>
            </div>

            <div className="-mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                    <label htmlFor="blog_text_input" className="form-label">
                        Blog text:
                    </label>
                    <textarea
                        className="form-input form-textarea"
                        name="blog_text_input"
                        ref={register({ required: true, minLength: 50 })}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form
