var handlApp = angular
  .module('handlApp', [
          'ui.router',
          'uiGmapgoogle-maps',
          'ngGeolocation',
          'ng-token-auth'
        ])
  .config(['$stateProvider','$urlRouterProvider', 'uiGmapGoogleMapApiProvider', '$authProvider',
   function($stateProvider, $urlRouterProvider,  uiGmapGoogleMapApiProvider, $authProvider){

  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCb_yS8HN7rAesCGtmMN8KztNNzU-kXLFs',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
  });

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/templates/home.html',
      controller: 'deliveriesController'
    })
    .state("/sign_up", {
      url: '/sign_up',
      templateUrl: "/js/templates/users/new.html",
      controller: 'usersController'
    })
    .state('/sign_in', {
      url: 'sign_in',
      templateUrl: "/js/templates/user_sessions/new.html",
      controller: 'userSessionsController'
    })
    .state('/deliveries/new', {
      url: '/deliveries/new',
      templateUrl: '/js/templates/deliveries/new.html',
      controller: "newDeliveryController"
    })
    .state('/deliveries', {
      url: '/deliveries',
      templateUrl: "/js/templates/deliveries/index.html",
      controller: "deliveriesController"
    })
    .state('/deliveries/:id', {
      url: '/deliveries/:id',
      templateUrl: '/js/templates/deliveries/show.html',
      controller: "deliveryController"
    });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000/api'
  });
}]);
