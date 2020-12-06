import React from 'react'
import moment from 'moment'

const BlogCard = ({ entry }) => {
    return (
        <div className="blog-card shadow-green hover:shadow-greenXL">
            <a href={`/blog/${entry._id}`}>
                <div className="h-60vh flex flex-col justify-between">
                    <img
                        className="w-auto h-1/2 object-cover"
                        src={entry.place_img}
                        alt={`${entry.city}, ${entry.country}`}
                    />
                    <div className="mt-3 md:mt-6 flex flex-row flex-wrap justify-evenly items-center">
                        <h2 className="text-primary-500 mx-2 sm:mx-4 text-2xl font-extrabold text-center">
                            {entry.title}
                        </h2>
                    </div>

                    <div className="my-3 md:my-6 flex flex-row flex-wrap justify-evenly items-center">
                        <p className="mx-2 sm:mx-4 text-lg font-bold">
                            {moment(entry.date_visited).format('MMMM Do YYYY')}
                        </p>
                    </div>

                    <div className="w-full flex items-center md:justify-between">
                        <img
                            className="rounded-md self-start w-1/3 md:w-1/4 h-auto"
                            src={entry.author_img}
                            alt={`${entry.city}, ${entry.country}`}
                        />
                        <p className="mx-auto text-2xl lg:text-lg xl:text-2xl font-bold flex flex-wrap">
                            {entry.author}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogCard
