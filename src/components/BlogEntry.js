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
            <img
                className="w-full h-auto"
                src={entry.place_img}
                alt={`${entry.city}, ${entry.country}`}
            />
            <div className="buttons-container">
                <a href={`/blog/edit/${entry._id}`}>
                    <button>Edit entry</button>
                </a>
                <button
                    onClick={(e) =>
                        window.confirm(
                            'Are you sure you wish to delete this blog? This cannot be undone!'
                        ) && deleteEntry(entry._id)
                    }
                >
                    Delete entry
                </button>
            </div>
            <div className="m-10">
                <h2 className="text-2xl font-extrabold">{entry.title}</h2>
                <p className="font-bold">
                    {moment(entry.date_visited).format('MMMM Do YYYY')}
                </p>
                <p>{entry.blog_text}</p>
            </div>
        </div>
    )
}

export default BlogEntry
