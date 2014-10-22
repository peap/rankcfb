var bodyParser = require('body-parser'),
    compress = require('compression'),
    config = require('./config'),
    express = require('express'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    session = require('express-session');

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

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    // NOTE: should be after inclusion of routes
    app.use(express.static('./public'));

    return app;
};
