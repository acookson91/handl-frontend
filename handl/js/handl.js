var handlApp = angular.module("handlApp", ["ngRoute","ngResource"]);

handlApp.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: "/templates/home.html",
      controller: 'mainHandlr'
    })
})
