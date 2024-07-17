//import express library
const express = require('express');
const router = require('./routes');

//create an express app
const app = express();

//use /api to prefix all routes
app.use("/api", router);

//make a port for the server to listen on
const port = 5000;

//listen to server on localhost:5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});