var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('./config');
var express = require('express');
var flash = require('connect-flash');
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

    app.locals.TITLE = 'RankCFB: interactive college football polling';
    app.locals.navAreas = [
        {prefix: '', label: 'Home'},
        {prefix: 'rankings', label: 'Rankings'},
        {prefix: 'stats', label: 'Stats'},
        {prefix: 'teams', label: 'Teams'},
        {prefix: 'conferences', label: 'Conferences'},
        {prefix: 'users', label: 'Users'},
    ];

    app.use(flash());
    app.use(function(req, res, next){
        res.locals.messages = [];
        next();
    });
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next){
        res.locals.user = req.user;
        res.locals.userJSON = JSON.stringify(req.user);
        next();
    });

    require('../app/routes/home')(app);
    require('../app/routes/users')(app);

    // NOTE: should be after inclusion of routes
    app.use(express.static('./public'));

    return app;
};
