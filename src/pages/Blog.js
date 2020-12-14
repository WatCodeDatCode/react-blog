import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { BlogEntry, LoadingSpinner, Error } from '../componentExports.js';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import mapStyle from '../components/styles/mapStyle';
import { useHistory } from 'react-router-dom';

const Blog = () => {
  const [entry, setEntry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  let history = useHistory();

  const handleRemoveErrorButton = () => {
    history.push('/blog');
  };

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://travel-blogs-api.herokuapp.com/blogs/${id}`
        );
        setEntry(response.data);
      } catch (err) {
        setError(
          'No entry found with that ID. Please double check your query or try again later.'
        );
        console.log(err);
      }
      setLoading(false);
    };

    fetchEntry();
  }, [id]);

  const Map = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{
          lat: entry.location.lat,
          lng: entry.location.lng
        }}
        defaultOptions={{ styles: mapStyle }}
      >
        <Marker
          key={entry._id}
          position={{
            lat: entry.location.lat,
            lng: entry.location.lng
          }}
          icon={{
            url: '/images/logo_marker.png',
            scaledSize: new window.google.maps.Size(35, 35)
          }}
        />
      </GoogleMap>
    ))
  );

  return (
    <>
      {loading || error ? (
        loading ? (
          <div className='h-95vh'>
            <LoadingSpinner />
          </div>
        ) : (
          <div className='h-95vh'>
            <Error
              error={error}
              buttonText='Go back'
              onClick={handleRemoveErrorButton}
            />
          </div>
        )
      ) : (
        <div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/places/wutach.jpg')`,
              backgroundRepeat: 'no-repeat',
              height: '100%',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className='blog-grid-container'>
              <BlogEntry entry={entry} />
              <div className='map-container'>
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
