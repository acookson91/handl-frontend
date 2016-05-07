handlApp.controller('deliveriesController', ["$scope", "$document", "uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation","deliveriesService",
function($scope, $document, uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

  var center = {latitude: 51.5082450, longitude: -0.0877000};

  $scope.map = {
    control: {},
    center: center,
    zoom: 12
  };

  $scope.marker = {
    id: 0,
    coords: {latitude: 52.9776, longitude: 2.349014}
  };

  var directionsDisplay = new google.maps.DirectionsRenderer();

  var geocoder = new google.maps.Geocoder();

  $scope.directions = {
    origin: "wd35qf",
    destination: "SE115lg",
  }





  $scope.getDirections = function() {
    var directionsService = new google.maps.DirectionsService();
    var map = $scope.map;
    console.log(map);
    var request = {
      origin: $scope.directions.origin,
      destination: $scope.directions.destination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  };


  $scope.getMyLocation = function() {
    var geolocation = navigator.geolocation;
    return geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    $scope.marker.coords.latitude = position.coords.latitude;
    $scope.marker.coords.longitude = position.coords.longitude;
    console.log($scope.markerWorking);
  };


  $scope.index = function(){
    deliveriesService.all().then(function(response) {
      $scope.deliveries = response.data;
    });
  };

  $scope.index();
  $scope.getMyLocation();
}]);
