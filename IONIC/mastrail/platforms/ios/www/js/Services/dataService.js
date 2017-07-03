angular.module('starter')

.factory('servicioApi', function($http) {

    var XMashapeKey = "TBt2gOZkpomshoYx3RIgsePmumDPp1HqoYBjsnqUUkRwgWQfpu";
    return {
        getListaCarreras: function(search) {

            return $http({
                method: 'GET',
                // url: 'https://trailapi-trailapi.p.mashape.com/&q[activities_activity_type_name_eq]= mountain biking',
                url: 'https://trailapi-trailapi.p.mashape.com/?q[name_eq]='+search,
                headers: {

                    "X-Mashape-Key": XMashapeKey
                }
            });
        },

        getCarreraId: function(unique_id) {

            return $http({
                method: 'GET',
                url: 'https://trailapi-trailapi.p.mashape.com/?lon=-&q[activities_unique_id_eq]=' + unique_id,
                headers: {

                    "X-Mashape-Key": XMashapeKey
                }
            });

            promise
                .success(function(response) {
                   return response.places[unique_id];
                })
                .error(function(error, status) {
                    return {};
                });
            }
        }
});
