angular.module('users').factory('Authentication', [function() {
    this.user = window.RankCFB.user;
    return {
        'user': this.user,
    };
}]);
