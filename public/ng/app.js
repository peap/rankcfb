var mainApplicationModuleName = 'rankcfb';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['teams']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
