import { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps'
import moment from 'moment'
import mapStyle from '../components/styles/mapStyle'

const Blogs = () => {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [selectedEntry, setSelectedEntry] = useState(null)

    const [sortedEntries, setSortedEntries] = useState([])
    const [sortBy, setSortBy] = useState('most_recent')
    const [authors, setAuthors] = useState(null)

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
            setError('Problem retrieving entries. Please check your URL or try again later.')
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
                        <div className="h-40vh bg-dark-500 rounded-lg text-white w-full">
                            <a
                                href={`/blog/${selectedEntry._id}`}
                                className="h-40vh flex flex-col justify-between"
                            >
                                <h2 className="font-nationalPark text-primary-500 mx-2 my-1 sm:mx-4 text-4xl font-extrabold text-center">
                                    {selectedEntry.title}
                                </h2>
                                <p className="mx-2 sm:mx-4 text-lg font-bold text-center">
                                    {moment(selectedEntry.date_visited).format(
                                        'MMMM Do YYYY'
                                    )}
                                </p>
                                <p className="text-lg mx-6 my-4 whitespace-pre-line truncate">
                                    {selectedEntry.blog_text}
                                </p>
                                <div className="w-full flex items-center md:justify-between">
                                    <img
                                        className="rounded-md self-start w-1/3 md:w-1/4 h-auto"
                                        src={selectedEntry.author_img}
                                        alt={`${selectedEntry.city}, ${selectedEntry.country}`}
                                    />
                                    <p className="mx-auto text-2xl lg:text-lg xl:text-2xl font-bold flex flex-wrap">
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
                    <LoadingSpinner />
                ) : (
                    <Error error={error} />
                )
            ) : (
                <div className="grid lg:grid-cols-2">
                    <div className="">
                        <div>
                            <select
                                className="text-dark-600"
                                onChange={(event) =>
                                    setSortBy(event.target.value)
                                }
                            >
                                <option value="most_recent">Most recent</option>
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
                            <div className="flex flex-wrap">
                                {sortedEntries.map((entry) => (
                                    <BlogCard entry={entry} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <Map
                            isMarkerShown
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

export default Blogs
