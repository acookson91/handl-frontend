handlApp.controller('deliveriesController', ["$scope", "uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation","deliveriesService", "directionsService", "locationService",
function($scope, uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService, directionsService, locationService){


  $scope.marker = locationService.marker;

  $scope.map = locationService.map;


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

  // $scope.findMyLocation();


$scope.index();
// $scope.getMyLocation();



}]);
