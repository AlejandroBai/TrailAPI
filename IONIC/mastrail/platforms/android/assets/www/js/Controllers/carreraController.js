angular.module('starter')

.controller('carreraCtrl', function($scope, $stateParams, servicioApi) {

    var carreraId = $stateParams.unique_id;

    servicioApi.getCarreraId(carreraId)
        .success(function(response){
            console.log(response);
            $scope.carreraTrailApi = response.places[0];
        })
        .error(function(error, status){
            console.log(error);
        });
});
