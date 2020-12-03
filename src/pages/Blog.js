import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router'

const Blog = () => {
    const [entry, setEntry] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchEntry = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await axios.get(
                    `https://travel-blogs-api.herokuapp.com/blogs/${id}`
                )
                setEntry(response.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }

        fetchEntry()
    }, [id])

    return (
        <div className="bg-black text-white">
            {loading || error ? (
                loading ? (
                    <div className="loader"></div>
                ) : (
                    <div>Error!</div>
                )
            ) : (
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
