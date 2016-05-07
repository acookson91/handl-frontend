handlApp.service('directionsService', ["uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation",
function( uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

  var geocoder = new google.maps.Geocoder();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

this.getDirections = function(delivery) {
  var pickup_string = delivery.pickup_line1 + ", " + delivery.pickup_line2 + ", " + delivery.pickup_postcode;
  var dropoff_string = delivery.dropoff_line1 + ", " + delivery.dropoff_line2 + ", " + delivery.dropoff_postcode;

  var request = {
    origin: pickup_string,
    destination: dropoff_string,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  _renderDirections(request);
};

function _renderDirections(request) {
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
}

}]);
