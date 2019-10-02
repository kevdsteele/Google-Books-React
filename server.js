const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server = require('http').createServer(app)

const io = require('socket.io').listen(server)


const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



io.sockets.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('Book saved', function(msg){
    console.log('message: ' + msg);

    if (msg==="error") {
      socket.emit("Error", {message:"Book already in site reading list"})
      

    } else {
    socket.broadcast.emit("Return book",  {title: msg})
    socket.emit("My book", {title:msg})
  }
  });
});

