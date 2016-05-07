handlApp.controller('deliveriesController', ["$scope", "$timeout", "$document", "uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation","deliveriesService",
function($scope, $document, $timeout, uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

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





  $scope.getDirections = function(delivery) {
    var directionsService = new google.maps.DirectionsService();
    var pickup_string = delivery.pickup_line1 + ", " + delivery.pickup_line2 + ", " + delivery.pickup_postcode;
    var dropoff_string = delivery.dropoff_line1 + ", " + delivery.dropoff_line2 + ", " + delivery.dropoff_postcode;
    var request = {
      origin: pickup_string,
      destination: dropoff_string,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    uiGmapIsReady.promise().then(function(map_instances){
      var myMap = map_instances[0].map;
      directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(myMap);
      } else {
        alert('Google route unsuccesfull!');
      }
    })});
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
