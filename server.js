process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var express = require('./config/express');
var mongoose = require('./config/mongoose');
var passport = require('./config/passport');

// initialize models first
var db = mongoose();

// initialize other things
var app = express();
var passport = passport();

// config
var config = require('./config/config');

// serve it up
var PORT = config.httpPort || 3000;
app.listen(PORT);
console.log('Server running at http://localhost:' + PORT + '/');

module.exports = app;
