import { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'

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

    return (
        <>
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <Error />
                )
            ) : (
                <div className="grid lg:grid-cols-2">
                    <div className="">
                        <div>
                            <select className="text-dark-600">
                                <option value="most_recent">Most recent</option>
                                <option value="oldest_first">
                                    Oldest first
                                </option>
                                <option value="by_author">
                                    Alphabetical by author
                                </option>
                            </select>
                            <div className="flex flex-wrap">
                                {entries.map((entry) => (
                                    <BlogCard entry={entry} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Blogs
