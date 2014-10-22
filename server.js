process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// load models first
var mongoose = require('./config/mongoose');
var db = mongoose();

// serve it up
var PORT = 3000;
var express = require('./config/express');
var app = express();
app.listen(PORT);
console.log('Server running at http://localhost:' + PORT + '/');

module.exports = app;
