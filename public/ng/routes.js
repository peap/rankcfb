angular.module('teams').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/teams/', {
            templateUrl: 'ng/teams/views.html',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
