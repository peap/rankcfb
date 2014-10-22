process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var express = require('./config/express');
var mongoose = require('./config/mongoose');

var app = express();
var db = mongoose();

var PORT = 3000;
app.listen(PORT);
console.log('Server running at http://localhost:' + PORT + '/');

module.exports = app;
