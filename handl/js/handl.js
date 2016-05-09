var handlApp = angular
  .module("handlApp", [
          "ngRoute",
          "ngResource",
          "uiGmapgoogle-maps",
          "ngGeolocation",
          'ng-token-auth'
        ])
  .config(['$routeProvider','uiGmapGoogleMapApiProvider', function($routeProvider, uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCb_yS8HN7rAesCGtmMN8KztNNzU-kXLFs',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
  });
  $routeProvider
    .when("/", {
      templateUrl: "/js/templates/home.html",
      controller: 'deliveriesController'
    })
    .when("/sign_in", {
      templateUrl: "/js/templates/user_sessions/new.html",
      controller: 'userSessionsController'
    })
    .when("/deliveries/new", {
      templateUrl: "/js/templates/deliveries/new.html",
      controller: "newDeliveryController"
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
