// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    .state('signin', {
      url: '',
      templateUrl: 'templates/signin.html',
      controller: 'signinCtrl'
    })

    .state('list', {
        url: '/list/:search',
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
    })

    .state('carreraDetail', {
        url: '/carreraDetail/:unique_id',
        //Le pasamos el id como parámetro, da igual el nombre, no ha de ser el mismo que en dataService
        templateUrl: 'templates/carreraDetail.html',
        controller: 'carreraCtrl'
    });

  $urlRouterProvider.otherwise('');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});