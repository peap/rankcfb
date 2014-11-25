angular.module('conferences').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/conferences/', {
            templateUrl: 'ng/conferences/views.html',
            controller: 'ConferencesController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
