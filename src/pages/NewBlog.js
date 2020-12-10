import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Geocode from 'react-geocode'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import Form from '../components/Form'

const TestForm = () => {
    let history = useHistory()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    Geocode.setApiKey(process.env.REACT_APP_MAP_KEY)
    Geocode.setLanguage('en')

    const postData = async (formData) => {
        setLoading(true)
        await Geocode.fromAddress(`${formData.city_input},${formData.country_input}`).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location
                axios
                    .post('https://travel-blogs-api.herokuapp.com/blogs', {
                        title: formData.blog_title_input,
                        city: formData.city_input,
                        country: formData.country_input,
                        author: formData.author_input,
                        author_img: formData.author_img_input,
                        blog_text: formData.blog_text_input,
                        date_visited: formData.date_visited_input,
                        place_img: formData.place_img_input,
                        lat,
                        lng,
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

    const handleRemoveErrorButton = () => {
        setError(false)
    }

    const onSubmit = async (data) => {
        console.log(data);
        await postData(data)
    }

    return (
        <div>
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <Error error={error} buttonText="Go back" onClick={handleRemoveErrorButton} />
                )
            ) : (
                <div className="form-page-container">
                    <h2 className="page-header">
                        Add new entry
                    </h2>
                    <Form onSubmit={onSubmit} />
                </div>
            )}
        </div>
    )
}

export default TestForm
