module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'public/lib/angular/angular.js',
            'public/lib/angular-mocks/angular-mocks.js',
            'public/lib/angular-resource/angular-resource.js',
            'public/lib/angular-route/angular-route.js',
            'public/ng/app.js',
            'public/ng/**/module.js',
            'public/ng/**/*.js',
            'public/ng/tests/unit/*.js',
        ],
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true,
    });
};
