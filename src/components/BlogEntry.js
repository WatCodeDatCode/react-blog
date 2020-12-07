import React from 'react'
import moment from 'moment'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const BlogEntry = ({ entry }) => {
    let history = useHistory()

    const deleteEntry = async (id) => {
        await axios
            .delete(`https://travel-blogs-api.herokuapp.com/blogs/${id}`)
            .then(() => {
                history.push('/blog')
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className="flex flex-wrap">
            <div className="flex h-auto relative justify-center mt-8 xl:mt-10 mx-6 xl:mx-10">
                <img
                    className="max-w-full rounded-lg block"
                    src={entry.place_img}
                    alt={`${entry.city}, ${entry.country}`}
                />
                <div className="image-overlay">
                    <h3 className="image-text">
                        {entry.city}, {entry.country}
                    </h3>
                </div>
            </div>
            <div className="buttons-container">
                <a href={`/blog/edit/${entry._id}`}>
                    <button className="mr-6 max-w-md font-nationalPark px-1 py-1 tracking-wide text-lg bg-primary-500 hover:bg-secondary-500 hover:shadow-orange focus:ring-offset-2 focus:ring-white text-dark-900 hover:text-white">
                        Edit entry
                    </button>
                </a>
                <button
                    className="mr-6 lg:mr-10 max-w-md font-nationalPark px-1 py-1 tracking-wide text-lg bg-red-500 hover:bg-dark-900 focus:ring-offset-2 focus:ring-white text-white hover:text-red-500"
                    onClick={(e) =>
                        window.confirm(
                            'Are you sure you wish to delete this blog? This cannot be undone!'
                        ) && deleteEntry(entry._id)
                    }
                >
                    Delete entry
                </button>
            </div>
            <div className="mx-6 lg:mx-10 mb-14">
                <h2 className="font-nationalPark text-4xl xl:text-5xl font-extrabold tracking-wide text-primary-500 mb-6">
                    {entry.title}
                </h2>
                <div className="sm:flex sm:justify-between content-center">
                    <p className="font-nationalPark tracking-wide flex-shrink-0 sm:text-2xl my-auto sm:ml-4 font-extrabold">
                        {moment(entry.date_visited).format('MMMM Do YYYY')}
                    </p>
                    <div className="sm:flex mt-4 sm:mt-0 sm:justify-end sm:content-center">
                        <img
                            className="w-4/12 sm:w-2/12 h-4/12 sm:h-2/12 rounded-lg sm:ml-2 sm:mr-4 my-auto object-cover"
                            src={entry.author_img}
                            alt={`${entry.author}`}
                        />
                        <p className="font-nationalPark tracking-wide font-bold text-lg sm:text-2xl sm:mr-4 mt-3 sm:mt-0">{entry.author}</p>
                    </div>
                </div>
                <p className="whitespace-pre-wrap mt-8 leading-relaxed text-lg">{entry.blog_text}</p>
                <p className="mt-8 text-md italic">Published on: {moment(entry.published_date).format('MMMM Do YYYY')}</p>
            </div>
        </div>
    )
}

export default BlogEntry
