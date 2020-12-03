import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import BlogEntry from '../components/BlogEntry'
import LoadingSpinner from '../components/LoadingSpinner'

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
        <div className="bg-dark-500 text-white">
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <div>Error!</div>
                )
            ) : (
                <BlogEntry entry={entry} />
            )}
        </div>
    )
}

export default Blog
