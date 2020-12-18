import React, { useContext } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

const BlogEntry = ({ entry }) => {
  const { token } = useContext(AuthContext);
  let history = useHistory();

  const deleteEntry = async (id) => {
    await axios
      .delete(`https://travel-blogs-api.herokuapp.com/blogs/${id}`)
      .then(() => {
        history.push('/blog');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='flexwrap-container'>
      <div className='blog-image-container'>
        <img
          className='blog-image'
          src={entry.place_img}
          alt={`${entry.city}, ${entry.country}`}
        />
        <div className='image-overlay'>
          <h3 className='image-text'>
            {entry.city}, {entry.country}
          </h3>
        </div>
      </div>
      <div className='buttons-container'>
        <a href='/blog' className='back-arrow-container'>
          <svg
            className='back-arrow'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>
        </a>
        {token && (
          <div className='flex'>
            <a href={`/blog/edit/${entry._id}`}>
              <button className='edit-button'>Edit entry</button>
            </a>
            <div>
              <button
                className='delete-button'
                onClick={(e) =>
                  window.confirm(
                    'Are you sure you wish to delete this blog? This cannot be undone!'
                  ) && deleteEntry(entry._id)
                }
              >
                Delete entry
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='blog-entry-container'>
        <h2 className='blog-title'>{entry.title}</h2>
        <div className='blog-heading-container'>
          <p className='blog-date'>
            {moment(entry.date_visited).format('MMMM Do YYYY')}
          </p>
          <div className='blog-author-container'>
            <img
              className='blog-author-image'
              src={entry.author_img}
              alt={`${entry.author}`}
            />
            <p className='blog-author-name'>{entry.author}</p>
          </div>
        </div>
        <p className='blog-text'>{entry.blog_text}</p>
        <p className='blog-published-date'>
          Published on: {moment(entry.published_date).format('MMMM Do YYYY')}
        </p>
      </div>
    </div>
  );
};

export default BlogEntry;
