import React from 'react';
import FormCountryOptions from './FormCountryOptions';
import { useForm } from 'react-hook-form';
import moment from 'moment';

const Form = ({ onSubmit, preloadedValues }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: preloadedValues,
    criteriaMode: 'all',
    mode: 'onChange'
  });

  return (
    <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-flex-container'>
        <div className='form-input-first'>
          <label htmlFor='city' className='form-label'>
            City:
          </label>
          <input
            className='form-input'
            type='text'
            name='city'
            ref={register({
              required: 'City is required',
              maxLength: {
                value: 50,
                message: 'Max length is 50'
              }
            })}
          />
          {errors.city && (
            <p className='form-error-message'>{errors.city.message}</p>
          )}
        </div>
        <div className='form-input-second'>
          <label htmlFor='country' className='form-label'>
            Country:
          </label>
          <select
            className='form-input'
            name='country'
            ref={register({ required: 'Please select a country' })}
          >
            <FormCountryOptions />
          </select>
          {errors.country && (
            <p className='form-error-message'>{errors.country.message}</p>
          )}
        </div>
      </div>
      <div className='form-flex-container'>
        <div className='form-input-first'>
          <label htmlFor='date_visited' className='form-label'>
            Date of visit:
          </label>
          <input
            className='form-input'
            type='date'
            name='date_visited'
            ref={register({
              required: 'Please enter date of visit',
              max: {
                value: moment().format('YYYY-MM-DD'),
                message: 'No future dates allowed'
              }
            })}
          />
          {errors.date_visited && (
            <p className='form-error-message'>{errors.date_visited.message}</p>
          )}
        </div>
        <div className='form-input-second'>
          <label htmlFor='place_img' className='form-label'>
            Image path/URL of place:
          </label>
          <input
            className='form-input'
            type='text'
            placeholder='/images/places/filename'
            name='place_img'
            ref={register({
              required: 'Please enter path/URL to image'
            })}
          />
          {errors.place_img && (
            <p className='form-error-message'>{errors.place_img.message}</p>
          )}
        </div>
      </div>
      <div className='form-flex-container'>
        <div className='form-input-first'>
          <label htmlFor='author' className='form-label'>
            Author:
          </label>
          <input
            className='form-input'
            type='text'
            name='author'
            ref={register({
              required: 'Author is required',
              minLength: {
                value: 5,
                message: 'Name must contain at least 5 characters'
              },
              maxLength: {
                value: 30,
                message: 'Max length is 30'
              }
            })}
          />
          {errors.author && (
            <p className='form-error-message'>{errors.author.message}</p>
          )}
        </div>
        <div className='form-input-second'>
          <label htmlFor='author_img' className='form-label'>
            Image path/URL of author:
          </label>
          <input
            className='form-input'
            type='text'
            placeholder='/images/authors/filename'
            name='author_img'
            ref={register({
              required: 'Please enter path/URL to image'
            })}
          />
          {errors.author_img && (
            <p className='form-error-message'>{errors.author_img.message}</p>
          )}
        </div>
      </div>
      <div className='form-container'>
        <div className='form-container-input'>
          <label htmlFor='title' className='form-label'>
            Blog title:
          </label>
          <input
            className='form-input'
            type='text'
            placeholder='Some awesome title'
            name='title'
            ref={register({ required: 'Please enter a title' })}
          />
          {errors.title && (
            <p className='form-error-message'>{errors.title.message}</p>
          )}
        </div>
      </div>
      <div className='form-container'>
        <div className='form-container-input'>
          <label htmlFor='blog_text' className='form-label'>
            Blog text:
          </label>
          <textarea
            className='form-input form-textarea'
            name='blog_text'
            ref={register({
              required: 'Please enter a blog text',
              minLength: {
                value: 50,
                message: 'Minimum of 50 characters required'
              }
            })}
          />
          {errors.blog_text && (
            <p className='form-error-message'>{errors.blog_text.message}</p>
          )}
        </div>
      </div>
      <div className='flex-justify'>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
