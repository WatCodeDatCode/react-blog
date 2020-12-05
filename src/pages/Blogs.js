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

    const MyMapComponent = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={6}
                defaultCenter={{ lat: entries[entries.length - 1].location.lat, lng: entries[entries.length - 1].location.lng }}
                defaultOptions={{styles: mapStyle}}
            >
                {props.isMarkerShown &&
                    entries.map((entry) => (
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
                                url: '/images/logo_without_text.png',
                                scaledSize: new window.google.maps.Size(35, 35)
                            }}
                        />
                    ))}

                {selectedEntry && (
                    <InfoWindow
                        position={{
                            lat: selectedEntry.location.lat,
                            lng: selectedEntry.location.lng,
                        }}
                    >
                        <div className="text-black w-full">
                            <a href={`/blog/${selectedEntry._id}`}>
                            <h2 className="font-bold text-xl mx-auto">
                                {selectedEntry.title}
                            </h2>
                            <p className="mx-auto">
                                {moment(selectedEntry.date_visited).format(
                                    'MMMM Do YYYY'
                                )}
                            </p>
                            <div className="w-full flex items-center md:justify-between">
                            <img
                                className="rounded-md self-start w-1/3 md:w-1/4 h-auto"
                                src={selectedEntry.author_img}
                                alt={`${selectedEntry.city}, ${selectedEntry.country}`}
                            />
                            <p className="mx-auto text-2xl lg:text-lg xl:text-2xl font-bold flex flex-wrap">{selectedEntry.author}</p>
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
                    <div className="w-auto h-screen">
                        <MyMapComponent
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
