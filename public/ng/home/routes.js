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
