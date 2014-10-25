var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    // register models
    require('../app/models/user.server.model');
    require('../app/models/team.server.model');
    require('../app/models/player.server.model');
    require('../app/models/statistic.server.model');
    require('../app/models/statval.server.model');
    require('../app/models/formula.server.model');

    return db;
}
