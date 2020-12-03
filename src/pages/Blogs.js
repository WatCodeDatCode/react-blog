import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

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
        <div className="bg-black text-white">
            {loading || error ? (
                loading ? (
                    <div className="loader"></div>
                ) : (
                    <div>Error!</div>
                )
            ) : (
                entries &&
                entries.map((entry) => (
                    <>
                        <h1>{entry.title}</h1>
                        <p>
                            {moment(entry.date_visited).format('MMMM Do YYYY')}
                        </p>
                        <p>{entry.blog_text}</p>
                        <img
                            src={entry.place_img}
                            width="500px"
                            height="auto"
                            alt={`${entry.title}`}
                        />
                    </>
                ))
            )}
        </div>
    )
}

export default Blogs
