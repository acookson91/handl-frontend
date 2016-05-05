var handlApp = angular.module("handlApp", ["ngRoute","ngResource"]);

handlApp.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  return $routeProvider
    .when("/", {
      templateUrl: "/js/templates/home.html",
      controller: 'newDeliveryController'
    })
    .when("/deliveries/new", {
      templateUrl: "/js/templates/deliveries/new.html",
      controller: "newDeliveryController"
    });
});
