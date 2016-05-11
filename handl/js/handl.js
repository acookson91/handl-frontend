var handlApp = angular
  .module('handlApp', [
          'ui.router',
          'uiGmapgoogle-maps',
          'ngGeolocation',
          'ng-token-auth',
          'ngCookies'
        ])

  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('auth:login-success', function() {
      console.log('GREAT SUCCESS');
      // $state.go('deliveries.index');
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
      controller: 'userSessionsController'
    })
    .state('sign_in', {
      url: '/sign_in',
      templateUrl: "/js/templates/user_sessions/new.html",
      controller: 'userSessionsController'
    })

    .state('user_sign_up', {
      url: '/user/sign_up',
      templateUrl: "/js/templates/users/new.html",
      controller: 'usersController'
    })

      .state('user',{
        url: '/user',
        abstract: true,
        template: '<ui-view>',
        resolve: {
          auth: function($auth){
            return $auth.validateUser();
          }
        }
      })
        .state('user.deliveries',{
          url:'/deliveries',
          templateUrl: "/js/templates/users/deliveries/index.html",
          controller: "deliveriesController"
        })
          .state('user.deliveries-new', {
            url: '/deliveries/new',
            templateUrl: '/js/templates/users/deliveries/new.html',
            controller: "newDeliveryController"
          })
              .state('user.deliveries-id', {
                url: '/deliveries/:id',
                templateUrl: '/js/templates/users/deliveries/show.html',
                controller: "deliveryController",
              });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });


}]);
