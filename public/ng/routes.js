angular.module('teams').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/teams/', {
            templateUrl: 'ng/teams/views.html',
        }).
        when('/', {
            templateUrl: 'ng/home/views.html',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
