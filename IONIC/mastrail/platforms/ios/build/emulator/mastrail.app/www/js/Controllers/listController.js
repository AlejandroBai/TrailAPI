angular.module('starter')

//Si no añadimos el servicio al controlador, no lo reconoce

.controller('listCtrl', function($scope, servicioApi, $stateParams) {

  var busqueda = $stateParams.search;

    servicioApi.getListaCarreras(busqueda)
        .success(function(response) {
            console.log(response);
           $scope.listaCarreras = response.places;
        })
        .error(function(error, status) {
            console.log(error);
        });

});
