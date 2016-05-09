var handlApp = angular
  .module('handlApp', [
          'ui.router',
          'uiGmapgoogle-maps',
          'ngGeolocation'
        ])
  .config(['$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider', function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){
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
}]);
