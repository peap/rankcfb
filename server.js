var PORT = 3000;

var express = require('express');
var app = express();

var logger = function(req, res, next) {
    console.log(req.method + ' - ' + req.path);
    next();
};

app.use(logger);
app.use('/', function(req, res) {
    res.send('RankCFB');
});

app.listen(PORT);
console.log('Server running at http://localhost:' + PORT + '/');

module.exports = app;
