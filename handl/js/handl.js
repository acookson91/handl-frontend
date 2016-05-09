var handlApp = angular
  .module("handlApp", [
          "ngRoute",
          "ngResource",
          "uiGmapgoogle-maps",
          "ngGeolocation",
          'ng-token-auth'
        ])
  .config(['$routeProvider','uiGmapGoogleMapApiProvider', '$authProvider',
   function($routeProvider, uiGmapGoogleMapApiProvider, $authProvider){

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
    .when("/sign_up", {
      templateUrl: "/js/templates/users/new.html",
      controller: 'usersController'
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

  $authProvider.configure({
    apiUrl: 'http://localhost:3000/api'
  });
}]);
