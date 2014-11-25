angular.module('rankings').factory('Rankings', [
    '$resource',
    function($resource) {
        return $resource('/api/rankings/:rankingId', {
            rankingId: '@_id',
        }, {
            update: {
                method: 'PUT',
            }
        });
    },
]);
