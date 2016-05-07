handlApp.controller('deliveriesController', ["$scope", "uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation","deliveriesService", "directionsService", "locationService",
function($scope, uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService, directionsService, locationService){




  $scope.map = locationService.map;
  $scope.marker = locationService.marker;


  $scope.index = function(){
    deliveriesService.all().then(function(response) {
      $scope.deliveries = response.data;
    });
  };

  $scope.displayDirections = function(delivery) {
    directionsService.getDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };

  $scope.index();
  $scope.findMyLocation();
}]);
