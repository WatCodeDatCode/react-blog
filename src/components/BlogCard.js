import React from 'react'
import moment from 'moment'

const BlogCard = ({ entry }) => {
    return (
        <div className="bg-secondary-300 text-dark-900 w-1/4 h-auto mx-1 sm:mx-4 lg:mx-6 my-4 sm:my-6 lg:my-10 rounded-lg overflow-hidden">
            <a href={`/blog/${entry._id}`}>
                <img
                    src={entry.place_img}
                    width="500px"
                    height="auto"
                    alt={`${entry.city}, ${entry.country}`}
                />
                <div className="my-1 sm:my-3 flex flex-row flex-wrap justify-evenly items-center">
                    <h2 className="mx-1 sm:mx-2 text-2xl font-extrabold text-center">{entry.title}</h2>
                </div>

                <div className="my-1 sm:my-3 flex flex-row flex-wrap justify-evenly items-center">
                    <p className="mx-1 sm:mx-2 text-lg font-bold">
                        {entry.city}, {entry.country}
                    </p>
                    <p className="mx-1 sm:mx-2 text-lg font-bold">
                        {moment(entry.date_visited).format('MMMM Do YYYY')}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <img
                        className="rounded-md self-start w-1/3 md:w-1/4 h-auto"
                        src={entry.author_img}
                        alt={`${entry.city}, ${entry.country}`}
                    />
                    <p className="mx-4 text-sm lg:text-lg font-bold flex flex-wrap">{entry.author}</p>
                </div>
            </a>
        </div>
    )
}

export default BlogCard
