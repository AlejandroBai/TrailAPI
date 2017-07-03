angular.module('starter')

 .controller('homeCtrl',function($scope, $cordovaBatteryStatus){

   document.addEventListener("deviceready", function () {

    $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

  }, false);

   $scope.search = {

     q: ''

   };
 });
