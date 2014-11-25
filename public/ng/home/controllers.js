angular.module('home').controller('HomeController', [
'$scope', 'Authentication', function($scope, Authentication) {
    $scope.name = 'RankCFB Home';
    $scope.user = Authentication.user;
}]);
