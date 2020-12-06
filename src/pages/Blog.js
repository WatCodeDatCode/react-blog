import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import BlogEntry from '../components/BlogEntry'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps'
import mapStyle from '../components/styles/mapStyle'

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

    const Map = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={6}
                defaultCenter={{
                    lat: entry.location.lat,
                    lng: entry.location.lng,
                }}
                defaultOptions={{ styles: mapStyle }}
            >
                <Marker
                    key={entry._id}
                    position={{
                        lat: entry.location.lat,
                        lng: entry.location.lng,
                    }}
                    icon={{
                        url: '/images/logo_marker.png',
                        scaledSize: new window.google.maps.Size(35, 35),
                    }}
                />
            </GoogleMap>
        ))
    )

    return (
        <>
            {loading || error ? (
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <Error error={error.message} />
                )
            ) : (
                <div className="grid lg:grid-cols-2">
                    <BlogEntry entry={entry} />
                    <div className="map-container">
                        <Map
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={
                                <div style={{ height: `100%` }} />
                            }
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Blog
