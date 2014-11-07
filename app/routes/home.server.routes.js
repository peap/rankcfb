module.exports = function(app) {
    var home = require('../controllers/home.server.controller');
    app.get('/', home.render);
};
