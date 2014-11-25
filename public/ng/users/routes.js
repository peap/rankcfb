angular.module('users').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/users/', {
            templateUrl: 'ng/users/views.html',
            controller: 'UsersController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
