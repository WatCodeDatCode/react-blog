# Final Project: Blog using React
## Table of contents
* [General information](#general-information)
* [Features](#features)
* [Future plans](#future-plans)
* [Technologies](#technologies)

## General information
This travel blog with react is a final project for the _Full-Stack Web Development_ program at _Hamburg Coding School_.

## Features
* Blog page with multiple blog entries and a Google map including markers for each visited destination. 
* Markers can be clicked to show a preview of the corresponding blog, which can also be clicked to open entry. 
* Blog entries are fetched through a database created specifically for this project. [See the repo here](https://github.com/WatCodeDatCode/blog-server).
* The database also has a stored user. When logging in with user details new blogs can be entered through a protected form. 
* Before posting the data from the form to the database, a call to the Geocoding API is made to fetch geocoordinates. This allows map markers to be placed without querying latitude and longitude. 
* New blogs appear automatically on the blog page after successful post. 
* Blogs can be filtered by date or by author, new authors are automatically added to the filter. 
* On the detail page of each blog a map with only a marker of the specific location is shown. 
* If logged in, blogs can be edited using a prefilled form. Blogs can also be deleted.
* On the contact page a form can be submitted which sends an email using [emailjs](https://www.emailjs.com/). 

## Future plans
* Add sign-up section to register new users.
* Allow editing of user profiles. 
* Profiles can upload images which will then automatically be taken (along with user name) for blog posts. 
* Blogs editable only by user that wrote them / admin. 

## Technologies
Project is created with:
* [Create React App](https://github.com/facebook/create-react-app).
* [Tailwind CSS](https://tailwindcss.com/).
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview) implemented through [react-google-maps](https://www.npmjs.com/package/react-google-maps).
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
