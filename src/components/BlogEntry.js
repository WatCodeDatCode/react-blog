import React from 'react'
import moment from 'moment'

const BlogEntry = ({ entry }) => {
    return (
        <>
            <img
            className="w-full h-auto"
                src={entry.place_img}
                alt={`${entry.city}, ${entry.country}`}
            />
            <div className="m-10">
                <h2 className="text-2xl font-extrabold">{entry.title}</h2>
                <p className="font-bold">
                    {moment(entry.date_visited).format('MMMM Do YYYY')}
                </p>
                <p>{entry.blog_text}</p>
            </div>
        </>
    )
}

export default BlogEntry
