var handlApp = angular
  .module('handlApp', [
          'ui.router',
          'uiGmapgoogle-maps',
          'ngGeolocation',
          'ng-token-auth'
        ])

  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('auth:login-success', function() {
      console.log('GREAT SUCCESS');
      $state.go('deliveries.index');
    });
  }])

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
      // templateUrl: '/',
      controller: 'userSessionsController'
    })
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: "/js/templates/users/new.html",
      controller: 'usersController'
    })
    .state('sign_in', {
      url: '/sign_in',
      templateUrl: "/js/templates/user_sessions/new.html",
      controller: 'userSessionsController'
    })

    .state('deliveries', {
      url: '/deliveries',
      abstract: true,
      template: '<ui-view/>',
      resolve: {
        auth: function($auth){
          return $auth.validateUser();
        }
      }
    })
      .state('deliveries.new', {
        url: '/new',
        templateUrl: '/js/templates/deliveries/new.html',
        controller: "newDeliveryController"
      })
        .state('deliveries.index',{
          url:'/',
          templateUrl: "/js/templates/deliveries/index.html",
          controller: "deliveriesController"
        })
          .state('deliveries.id', {
            url: '/:id',
            templateUrl: '/js/templates/deliveries/show.html',
            controller: "deliveryController"
          });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });


}]);
