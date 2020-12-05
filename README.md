# Final Project: Blog using React
## Table of contents
* [General information](#general-information)
* [Features](#features)
* [Planned](#planned)
* [Technologies](#technologies)

## General information
This travel blog with react is a final project for the _Full-Stack Web Development_ program at _Hamburg Coding School_.

## Features
* Blog page with multiple blog entries and a Google map including markers for each visited destination. 
* Markers can be clicked to show a preview of the corresponding blog, which can also be clicked to open entry. 
* Blog entries are fetched through a database created specifically for this project. [See the repo here](https://github.com/WatCodeDatCode/blog-server).
* New blogs can be entered through a separate form. Before posting the data to the database, a call to the Geocoding API is made to fetch geocoordinates which are then sent with the post request. 
* New blogs appear automatically on the blog page after successful post.

## Planned
* Set up new page for editing entries, form pre-filled with state data from specific blog entry.
* Login including authentication so that entries can only be added/edited when logged in.
* Add map to detail page of entries.
* Improve design and add home / contact pages.

## Technologies
Project is created with:
* [Create React App](https://github.com/facebook/create-react-app).
* [Tailwind CSS](https://tailwindcss.com/).
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview) implemented through [react-google-maps](https://www.npmjs.com/package/react-google-maps).
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
