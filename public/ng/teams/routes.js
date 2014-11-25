angular.module('teams').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/teams/', {
            templateUrl: 'ng/teams/views.html',
            controller: 'TeamsController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
