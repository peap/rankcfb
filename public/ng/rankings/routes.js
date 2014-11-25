angular.module('rankings').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/rankings/', {
            templateUrl: 'ng/rankings/views/main.html',
        }).
        when('/rankings/create', {
            templateUrl: 'ng/rankings/views/create.html',
        }).
        when('/rankings/:rankingId', {
            templateUrl: 'ng/rankings/views/read.html',
        }).
        when('/rankings/:rankingId/edit', {
            templateUrl: 'ng/rankings/views/update.html',
        }).
        otherwise({
            redirectTo: '/',
        });
}]);
