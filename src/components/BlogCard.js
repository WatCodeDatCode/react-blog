import React from 'react';
import moment from 'moment';

const BlogCard = ({ entry }) => {
  return (
    <div className='blog-card'>
      <a href={`/blog/${entry._id}`}>
        <div className='card-content-container'>
          <img
            className='card-image'
            src={entry.place_img}
            alt={`${entry.city}, ${entry.country}`}
          />
          <div className='card-title-container'>
            <h2 className='card-title'>{entry.title}</h2>
          </div>
          <div className='card-date-container'>
            <p className='card-date'>
              {moment(entry.date_visited).format('MMMM Do YYYY')}
            </p>
          </div>
          <div className='card-author-container'>
            <img
              className='card-author-img'
              src={entry.author_img}
              alt={`${entry.city}, ${entry.country}`}
            />
            <p className='card-author-name'>{entry.author}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
