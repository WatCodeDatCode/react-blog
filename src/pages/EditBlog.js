import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Geocode from 'react-geocode'
import axios from 'axios'
import moment from 'moment'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import Form from '../components/Form'
import AccessDenied from '../components/AccessDenied'
import AuthContext from '../components/AuthContext'

const NewBlog = () => {
    const { token } = useContext(AuthContext)
    let history = useHistory()
    const { id } = useParams()

    const [fetchedData, setFetchedData] = useState(null)
    const [enteredData, setEnteredData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    Geocode.setApiKey(process.env.REACT_APP_MAP_KEY)
    Geocode.setLanguage('en')

    const putData = async (formData) => {
        setLoading(true)
        await Geocode.fromAddress(`${formData.city},${formData.country}`).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location
                console.log(lat, lng)
                axios
                    .put(`https://travel-blogs-api.herokuapp.com/blogs/${id}`, {
                        title: formData.title,
                        city: formData.city,
                        country: formData.country,
                        author: formData.author,
                        author_img: formData.author_img,
                        blog_text: formData.blog_text,
                        date_visited: formData.date_visited,
                        place_img: formData.place_img,
                        location: {
                            lat,
                            lng,
                        },
                    })
                    .then(
                        (response) => {
                            const data = response.data
                            console.log(data)
                            history.push('/blog')
                        },
                        (err) => {
                            setError(
                                'We could not enter your data to the server. Please try again later.'
                            )
                            console.error(err)
                        }
                    )
            },
            (err) => {
                setError(
                    'Destination does not seem to exist, please check that you entered the correct country and city.'
                )
                console.error(err)
            }
        )
        setLoading(false)
    }

    const onSubmit = async (data) => {
        setEnteredData(data)
        await putData(data)
        scrollToTop()
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleRemoveErrorButton = () => {
        error ===
            'Destination does not seem to exist, please check that you entered the correct country and city.' ||
        error ===
            'We could not enter your data to the server. Please try again later.'
            ? setError(false)
            : history.push('/')
    }

    useEffect(() => {
        const fetchEntry = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await axios.get(
                    `https://travel-blogs-api.herokuapp.com/blogs/${id}`
                )

                let formData = response.data
                formData.date_visited = moment(
                    response.data.date_visited
                ).format('YYYY-MM-DD')

                setFetchedData(formData)
            } catch (err) {
                console.error(err)
                setError(
                    'No entry with that ID found. Please check your query or try again later.'
                )
            }
            setLoading(false)
        }
        fetchEntry()
    }, [id])

    return (
        <>
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <Error
                        error={error}
                        buttonText="Go back"
                        onClick={handleRemoveErrorButton}
                    />
                )
            ) : token ? (
                <div className="form-page-container">
                    <h2 className="page-header">Edit entry</h2>
                    {fetchedData && (
                        <Form
                            onSubmit={onSubmit}
                            preloadedValues={
                                enteredData ? enteredData : fetchedData
                            }
                        />
                    )}
                </div>
            ) : (
                <AccessDenied />
            )}
        </>
    )
}

export default NewBlog
