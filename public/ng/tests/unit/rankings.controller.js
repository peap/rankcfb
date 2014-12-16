describe('Testing Rankings controller', function() {
    var _scope, RankingsController;

    beforeEach(function() {
        module('rankcfb');

        jasmine.addMatchers({
            toEqualData: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: angular.equals(actual, expected),
                        };
                    },
                };
            },
        });

        inject(function($rootScope, $controller) {
            _scope = $rootScope.$new();
            RankingsController = $controller('RankingsController', {
                $scope: _scope,
            });
        });
    });

    it('Should have a find method that uses $resource to retrieve a list of rankings',
        inject(function(Rankings) {
            inject(function($httpBackend) {
                var sampleRanking = new Rankings({
                    name: 'ng test ranking',
                    description: 'ng test description',
                    formula: 'ngx + ngy',
                    published: true,
                });
                var sampleRankings = [sampleRanking];

                $httpBackend
                    .expectGET('api/rankings')
                    .respond(sampleRankings);

                _scope.find();
                $httpBackend.flush();

                expect(_scope.rankings).toEqualData(sampleRankings);
            });
        })
    );

    it('Should have a findOne method that uses $resource to retrieve a single ranking',
        inject(function(Rankings) {
            inject(function($httpBackend, $routeParams) {
                var sampleRanking = new Rankings({
                    name: 'ng test ranking',
                    description: 'ng test description',
                    formula: 'ngx + ngy',
                    published: true,
                });

                $routeParams.rankingId = 'abcdef123456789012345678';

                $httpBackend
                    .expectGET(/api\/rankings\/([0-9a-fA-F]{24})$/)
                    .respond(sampleRanking);

                _scope.findOne();
                $httpBackend.flush();

                expect(_scope.ranking).toEqualData(sampleRanking);
            });
        })
    );

});
