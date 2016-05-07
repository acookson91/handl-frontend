handlApp.controller('deliveriesController', ["$scope", "$location", "$geolocation","deliveriesService",
function($scope, $location, $geolocation, deliveriesService){

  var center = {latitude: 51.5082450, longitude: -0.0877000};

  $scope.markerWorking = false;

  $scope.marker = {
    id: 0,
    coords: {latitude: 52.9776, longitude: 2.349014}
  };

  $scope.getMyLocation = function() {
    var geolocation = navigator.geolocation;
    return geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    $scope.marker.coords.latitude = position.coords.latitude;
    $scope.marker.coords.longitude = position.coords.longitude;
    console.log($scope.markerWorking);
  }

  $scope.map = {
    center: center,
    zoom: 12
  };


  $scope.index = function(){
    deliveriesService.all().then(function(response) {
      $scope.deliveries = response.data;
    });
  };

  $scope.index();
  $scope.getMyLocation();
}]);
