angular.module('rankings').controller('RankingsController', [
    '$scope', '$routeParams', '$location', 'Authentication', 'Rankings',
    function($scope, $routeParams, $location, Authentication, Rankings) {
        $scope.title = 'Rankings';
        $scope.authentication = Authentication;

        $scope.create = function() {
            var ranking = new Rankings({
                name: this.name,
                description: this.description,
                formula: this.formula,
                published: this.published,
            });
            ranking.$save(function(response) {
                $location.path('rankings/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.publishedRankings = Rankings.query();
        };

        $scope.findOne = function() {
            $scope.ranking = Rankings.get({
                rankingId: $routeParams.rankingId,
            });
        };

        $scope.update = function() {
            $scope.ranking.$update(function() {
                $location.path('rankings/' + $scope.ranking._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(ranking) {
            if (ranking) {
                ranking.$remove(function() {
                    for (var i in $scope.rankings) {
                        if ($scope.rankings[i] === ranking) {
                            $scope.rankings.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.ranking.$remove(function() {
                    $location.path('rankings/');
                });
            }
        };
    }
]);
