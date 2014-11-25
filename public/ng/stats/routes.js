angular.module('stats').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/stats/', {
            templateUrl: 'ng/stats/views.html',
            controller: 'StatsController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
