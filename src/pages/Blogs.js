import { useState, useEffect } from 'react'
import axios from 'axios'
import { BlogCard, LoadingSpinner, Error } from '../componentExports.js'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps'
import moment from 'moment'
import mapStyle from '../components/styles/mapStyle'
import { useHistory } from 'react-router-dom'

const Blogs = () => {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [selectedEntry, setSelectedEntry] = useState(null)

    const [sortedEntries, setSortedEntries] = useState([])
    const [sortBy, setSortBy] = useState('most_recent')
    const [authors, setAuthors] = useState(null)

    let history = useHistory()

    const fetchEntries = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await axios(
                `https://travel-blogs-api.herokuapp.com/blogs/`
            )
            setEntries(response.data)
            setSortedEntries(response.data)
        } catch (err) {
            setError(
                'Problem retrieving entries. Please check your URL or try again later.'
            )
        }
        setLoading(false)
    }

    const Map = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={6}
                defaultCenter={{
                    lat: sortedEntries[0].location.lat,
                    lng: sortedEntries[0].location.lng,
                }}
                defaultOptions={{ styles: mapStyle }}
            >
                {props.isMarkerShown &&
                    sortedEntries.map((entry) => (
                        <Marker
                            key={entry._id}
                            position={{
                                lat: entry.location.lat,
                                lng: entry.location.lng,
                            }}
                            onClick={() => {
                                setSelectedEntry(entry)
                            }}
                            icon={{
                                url: '/images/logo_marker.png',
                                scaledSize: new window.google.maps.Size(35, 35),
                            }}
                        />
                    ))}

                {selectedEntry && (
                    <InfoWindow
                        position={{
                            lat: selectedEntry.location.lat,
                            lng: selectedEntry.location.lng,
                        }}
                        onCloseClick={() => {
                            setSelectedEntry(null)
                        }}
                    >
                        <div className="map-info-container">
                            <a
                                href={`/blog/${selectedEntry._id}`}
                                className="map-info-anchor"
                            >
                                <h2 className="map-info-header">
                                    {selectedEntry.title}
                                </h2>
                                <p className="map-info-date">
                                    {moment(selectedEntry.date_visited).format(
                                        'MMMM Do YYYY'
                                    )}
                                </p>
                                <p className="map-info-text">
                                    {selectedEntry.blog_text}
                                </p>
                                <div className="map-info-author-container">
                                    <img
                                        className="map-info-author-image"
                                        src={selectedEntry.author_img}
                                        alt={`${selectedEntry.city}, ${selectedEntry.country}`}
                                    />
                                    <p className="map-info-author">
                                        {selectedEntry.author}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        ))
    )

    const handleRemoveErrorButton = () => {
        history.push('/')
    }

    useEffect(() => {
        fetchEntries()
    }, [])

    useEffect(() => {
        const getAuthors = () => {
            let authorData = []
            for (let i = 0; i < entries.length; i++) {
                authorData.push(entries[i].author)
            }
            let uniqueAuthors = [...new Set(authorData)]
            setAuthors(uniqueAuthors)
        }

        getAuthors()

        const sortEntries = (type) => {
            let sorted

            if (type === 'most_recent') {
                sorted = [...entries].sort((a, b) =>
                    b.date_visited.localeCompare(a.date_visited)
                )
            } else if (type === 'oldest_first') {
                sorted = [...entries].sort((a, b) =>
                    a.date_visited.localeCompare(b.date_visited)
                )
            } else {
                sorted = [...entries]
                    .filter((entry) => {
                        return entry.author === type
                    })
                    .sort((a, b) =>
                        b.date_visited.localeCompare(a.date_visited)
                    )
            }
            setSortedEntries(sorted)
        }

        sortEntries(sortBy)
    }, [sortBy, entries])

    return (
        <>
            {loading || error ? (
                loading ? (
                    <div className="h-90vh">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="h-90vh">
                        <Error
                            error={error}
                            buttonText="Return home"
                            onClick={handleRemoveErrorButton}
                        />
                    </div>
                )
            ) : (
                <div>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/places/dimmuborgir.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            height: '100%',
                            backgroundAttachment: 'fixed',
                        }}
                    >
                        <div className="blog-grid-container">
                            <div>
                                <div className="select-container">
                                    <p className="select-text">Filter:</p>
                                    <select
                                        className="select-dropdown"
                                        onChange={(event) =>
                                            setSortBy(event.target.value)
                                        }
                                    >
                                        <option value="most_recent">
                                            Most recent
                                        </option>
                                        <option value="oldest_first">
                                            Oldest first
                                        </option>
                                        {authors &&
                                            authors.map((author) => (
                                                <option value={author}>
                                                    By {author}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="flex flex-wrap justify-around">
                                    {sortedEntries.map((entry) => (
                                        <BlogCard entry={entry} />
                                    ))}
                                </div>
                            </div>

                            <div className="map-container">
                                <Map
                                    isMarkerShown
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`}
                                    loadingElement={
                                        <div style={{ height: `100%` }} />
                                    }
                                    containerElement={
                                        <div style={{ height: `100%` }} />
                                    }
                                    mapElement={
                                        <div style={{ height: `100%` }} />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Blogs
