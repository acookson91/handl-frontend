handlApp.service('directionsService', ["uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation",
function( uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

  var geocoder = new google.maps.Geocoder();
  var deliveryDirectionsDisplay = new google.maps.DirectionsRenderer();
  var deliveryDirectionsService = new google.maps.DirectionsService();
  var pickupDirectionsDisplay = new google.maps.DirectionsRenderer();
  var pickupDirectionsService = new google.maps.DirectionsService();

this.getDirections = function(delivery) {


  var pickup_string = delivery.pickup_line1 + ", " + delivery.pickup_line2 + ", " + delivery.pickup_postcode.replace(/\s+/, "") ;
  var dropoff_string = delivery.dropoff_line1 + ", " + delivery.dropoff_line2 + ", " + delivery.dropoff_postcode.replace(/\s+/, "") ;

  console.log(pickup_string)

  var request = {
    origin: pickup_string,
    destination: dropoff_string,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  _renderDirections(request);
};

this.getToPickup = function(marker, delivery) {
  var myLocationCoords = {lat: marker.coords.latitude, lng: marker.coords.longitude};
  var pickup_string = delivery.pickup_line1 + ", " + delivery.pickup_line2 + ", " + delivery.pickup_postcode;

  var request = {
    origin: myLocationCoords,
    destination: pickup_string,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  _renderPickupDirections(request)
};

function _renderDirections(request) {
  uiGmapIsReady.promise().then(function(map_instances){
    var myMap = map_instances[0].map;
    deliveryDirectionsService.route(request, function (response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      deliveryDirectionsDisplay.setDirections(response);
      deliveryDirectionsDisplay.setMap(myMap);
    } else {
      alert('Google route unsuccesfull!');
    }
  })});
}

function _renderPickupDirections(request) {
  uiGmapIsReady.promise().then(function(map_instances){
    var myMap = map_instances[0].map;
    pickupDirectionsService.route(request, function (response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      pickupDirectionsDisplay.setDirections(response);
      pickupDirectionsDisplay.setMap(myMap);
    } else {
      alert('Google route unsuccesfull!');
    }
  })});
}

}]);
