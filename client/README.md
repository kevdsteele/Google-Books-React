# Google Books Search MERN Aplication
An appication that allows users to access to Google Books API to searh for and save books to a site reading list

** Fully developed by  Kevin Steele for GWU Full Stack Web Development BootCamp 

## Dependencies

Node, Express, Mongo, Mongoose, React, Axios, Socket IO, React Toastify

Run npm i to install all dependencies

This application is intended to be hosted on Heroku. Please create a .env file with your Heroku mLab Mongo DB settings or update the localhost DB database name in the server.js file

## Organization 

Client - contains the public folder and src folder used to render the React App and components properly when deployed to Heroku

Models - contains the Mongoose schema definitions for Books

Routes - contains the API and HTML routes for the application

Controllers - contains the database commands to create, find and delete Book documents in the Collection 

Server.Js - The backend Node, Express, Mongo and Socket IO server file 

