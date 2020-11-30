import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router'

const Blog = () => {
    const [entry, setEntry] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://travel-blogs-api.herokuapp.com/blogs/${id}`)
            .then((res) => {
                const blogEntry = res.data
                setEntry(blogEntry)
                console.log(entry)
            }).catch(err => {
                console.error(err)
            })

    }, [entry, id])

    return (
        <div className="bg-black text-white">
            {entry && (
                <>
                    <h1>{entry.title}</h1>
                    <p>{moment(entry.date_visited).format('MMMM Do YYYY')}</p>
                    <p>{entry.blog_text}</p>
                    <img
                        src={entry.place_img}
                        height="500px"
                        width="auto"
                        alt={`${entry.title}`}
                    />
                </>
            )}
        </div>
    )
}

export default Blog
