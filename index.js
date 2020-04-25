"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const config = require("config");

const server = express();

//cors configuration
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization colender_id user_id"
  );
  next();
});

//compression and body parser for incoming post request
server.use(compression());
server.use(bodyParser.json());

// Routes will always go here 
server.use('/graph', require('./routes/routes'));

server.listen(8005, function() {
  console.log("Candle Stick Application listening on port 8005!");
});
