angular.module('home').controller('HomeController', [
    '$scope', 'Authentication',
    function($scope, Authentication) {
        $scope.title = 'Home';
        $scope.user = Authentication.user;
    },
]);
