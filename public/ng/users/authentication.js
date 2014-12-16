angular.module('users').factory('Authentication', [function() {
    this.user = (window.RankCFB && window.RankCFB.user) || null;
    return {
        'user': this.user,
    };
}]);
