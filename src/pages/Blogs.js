import { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Blogs = () => {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchEntries = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await axios(
                `https://travel-blogs-api.herokuapp.com/blogs/`
            )
            setEntries(response.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchEntries()
    }, [])

    console.log(entries)

    return (
        <div className="bg-dark-500 text-white">
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <div>Error!</div>
                )
            ) : (
                entries &&
                entries.map((entry) => <BlogCard entry={entry} />)
            )}
        </div>
    )
}

export default Blogs
