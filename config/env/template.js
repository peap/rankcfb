module.exports = {
    db: 'mongodb://mongodb-connection.example.com/rankcfb',
    sessionSecret: 'put your secret key here',
    httpPort: 3000,
    google: {
        clientID: 'Application ID',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback',
    },
}
