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

angular.module('home').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'ng/home/views.html',
            controller: 'HomeController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
