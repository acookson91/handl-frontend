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

  // $scope.findMyLocation = function(){
  //   locationService.getMyLocation();
  // };

  $scope.getMyLocation = function() {
    var geolocation = navigator.geolocation;
    return geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    _updateMarker(position);
    _updateMap(position);
  };

  function _updateMarker(position){
    $scope.marker.coords.latitude = position.coords.latitude;
    $scope.marker.coords.longitude = position.coords.longitude;
  };

  function _updateMap(position){
    $scope.map.center = {latitude: position.coords.latitude, longitude: position.coords.longitude};
    $scope.map.zoom = 12;
  }

  $scope.index();
  $scope.getMyLocation();
}]);
