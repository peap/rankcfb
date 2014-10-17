var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

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

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);

    // NOTE: should be after inclusion of routes
    app.use(express.static('./public'));

    return app;
};
