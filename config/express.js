var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('./config');
var express = require('express');
var methodOverride = require('method-override');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');

module.exports = function() {
    var app = express();
    var env = process.env.NODE_ENV;

    if (env === 'dev') {
        app.use(morgan('dev'));
    } else if (env === 'prod') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    // NOTE: should be after inclusion of routes
    app.use(express.static('./public'));

    return app;
};
