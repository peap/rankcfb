var users = require('../controllers/users');
var rankings = require('../controllers/rankings');

module.exports = function(app) {
    app.route('/api/rankings/')
        .get(rankings.list)
        .post(users.requiresLogin, rankings.create);

    app.route('/api/rankings/:rankingId')
        .get(rankings.read)
        .put(users.requiresLogin, rankings.hasAuthorization, rankings.update)
        .delete(users.requiresLogin, rankings.hasAuthorization, rankings.delete);

    app.param('rankingId', rankings.rankingById);
};
