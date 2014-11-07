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
        {prefix: 'users', label: 'Users'},
        {prefix: 'teams', label: 'Teams'},
        {prefix: 'conferences', label: 'Conferences'},
    ];

    app.use(flash());
    app.use(function(req, res, next){
        res.locals.messages = [];
        res.locals.activeNav = req.path.split('/')[1];
        next();
    });
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next){
        res.locals.user = req.user;
        next();
    });

    require('../app/routes/home.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    // NOTE: should be after inclusion of routes
    app.use(express.static('./public'));

    return app;
};
