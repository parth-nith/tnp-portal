var app = angular.module('tnp',['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home',
      controller: 'homeCtrl'
    })
    .otherwise({redirectTo: '/'});

});