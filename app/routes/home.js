module.exports = function(app) {
    var home = require('../controllers/home');
    app.get('/', home.render);
};
