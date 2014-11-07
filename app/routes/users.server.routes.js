var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function(app) {
    app.route('/signup').post(users.signup);
    app.route('/signin').post(
        passport.authenticate(
            'local',
            {
                successRedirect: '/',
                failureRedirect: '/',
                failureFlash: 'true',
            }
        )
    );
    app.get('/signout', users.signout);

    app.get('/oauth/google', passport.authenticate('google', {
        failureRedirect: '/',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ],
    }));

    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/',
    }));

    app.route('/users')
        .get(users.list)
        .post(users.create);

    app.route('/users/:userId')
        .delete(users.delete)
        .get(users.read)
        .put(users.update);

    app.param('userId', users.userById);
};
