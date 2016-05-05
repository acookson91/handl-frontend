var handlApp = angular.module("handlApp", ["ngRoute","ngResource"]);

handlApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: "/js/templates/home.html",
      controller: 'deliveriesController'
    })
    .when("/delivery-form", {
      templateUrl: "/js/templates/delivery-form.html",
      controller: "deliveriesController"
    })
    .when("/confirm-delivery", {
      templateUrl: "/js/templates/confirm-delivery.html",
      controller: "deliveriesController"
    })
    .when("/deliveries", {
      templateUrl: "/js/templates/deliveries/index.html",
      controller: "deliveriesController"
    })
    .when("/deliveries/:id", {
      templateUrl: "/js/templates/deliveries/show.html",
      controller: "deliveryController"

    });
}]);
