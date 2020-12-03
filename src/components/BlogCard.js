import React from 'react'
import moment from 'moment'

const BlogCard = ({ entry }) => {
    return (
        <a href={`/blog/${entry._id}`}>
            <h2 className="text-2xl font-extrabold">{entry.title}</h2>
            <p className="font-bold">
                {entry.city}, {entry.country}
            </p>
            <p className="font-bold">
                {moment(entry.date_visited).format('MMMM Do YYYY')}
            </p>
            <img
                src={entry.place_img}
                width="500px"
                height="auto"
                alt={`${entry.city}, ${entry.country}`}
            />
            <img
                src={entry.author_img}
                width="50px"
                height="auto"
                alt={`${entry.city}, ${entry.country}`}
            />
            <p>{entry.author}</p>
        </a>
    )
}

export default BlogCard
