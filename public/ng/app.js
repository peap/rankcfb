var mainAppName = 'rankcfb';

var mainAppModule = angular.module(mainAppName, ['ngRoute', 'teams']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainAppName]);
});
