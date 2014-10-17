var express = require('./config/express');
var app = express();

var PORT = 3000;
app.listen(PORT);
console.log('Server running at http://localhost:' + PORT + '/');

module.exports = app;
