var mainAppName = 'rankcfb';

var mainAppModule = angular.module(
    mainAppName,
    [
        'ngRoute',
        'home',
        'teams',
        'users',
    ]
);

mainAppModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainAppName]);
});
