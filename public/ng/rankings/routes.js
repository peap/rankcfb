angular.module('rankings').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/rankings/', {
            templateUrl: 'ng/rankings/views.html',
            controller: 'RankingsController',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
