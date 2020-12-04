import React from 'react'
import moment from 'moment'

const BlogEntry = ({ entry }) => {
    return (
        <div>
            <h2 className="text-2xl font-extrabold">{entry.title}</h2>
            <p className="font-bold">{moment(entry.date_visited).format('MMMM Do YYYY')}</p>
            <p>{entry.blog_text}</p>
            <img
                src={entry.place_img}
                height="500px"
                width="auto"
                alt={`${entry.city}, ${entry.country}`}
            />
        </div>
    )
}

export default BlogEntry
