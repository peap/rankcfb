var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    // register models
    require('../app/models/ranking');

    require('../app/models/statistic');
    require('../app/models/statval');
    require('../app/models/player');

    require('../app/models/team');

    require('../app/models/conference');

    require('../app/models/user');

    return db;
}
